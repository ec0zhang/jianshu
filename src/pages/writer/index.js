import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

class Writer extends Component {

    render() {
        const {loginStatus} = this.props;
        if (!loginStatus) {
            return <Redirect to='/login'/>;
        } else {
            return (
                <div>写文章</div>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    loginStatus: state.getIn(['login', 'sign']),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Writer);