import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {WriteLeft, WriteRight, WriteWrap, WriteHelps, Left} from "./style";
import {Button} from "../../common/header/style";

class Writer extends Component {

    render() {
        const {loginStatus} = this.props;
        // if (!loginStatus) {
        //     return <Redirect to='/login'/>;
        // } else {
        return (
            <WriteWrap>
                <Left>
                    <WriteHelps>
                        <div className='picture1'/>
                        <div className='picture2'/>
                        <div className='picture3'/>
                        <div className='picture4'/>
                        <div className='picture5'/>
                    </WriteHelps>
                    <WriteLeft/>
                </Left>
                <WriteRight/>
            </WriteWrap>
        )
    }

    // }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'sign']),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Writer);