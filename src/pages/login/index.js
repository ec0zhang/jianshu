import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {actionCreators} from "./store";
import {LoginWrapper, LoginBox, Input, Button} from './style'

class Login extends Component {

    render() {
        const {login, handleLogin} = this.props;
        if (login) {
            return <Redirect to='/'/>;
        } else {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => {
                            this.account = input;
                        }}/>
                        <Input placeholder='密码' type='password' ref={(input) => {
                            this.password = input;
                        }}/>
                        <Button onClick={() => handleLogin(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'sign']),
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin(account, password) {
        dispatch(actionCreators.getLogin(account.value, password.value))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);