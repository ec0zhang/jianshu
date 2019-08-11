import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {HomeWrapper, HomeLeft, HomeRight, BackTop} from './style'
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";
import {actionCreators} from "./store";

class Home extends PureComponent {

    /**
     **shouldComponentUpdate(nextProps, nextState, nextContext) {},
     * 可以防止多次虚拟 dom 的比对，优化性能，但是 PureComponent 后来取代了他
     *
     * PureComponent 底层有写好的 shouldComponentUpdate
     * 只需要把 Component 改写成 PureComponent 即可
     * 条件是数据管理最好使用 immutable.js 的数据，否则会出现不可预知的问题
     **/

    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        alt=''
                        className='banner'
                        src='//upload.jianshu.io/admin_banners/web_images/4686/b205842c3dd6736c233b052411fe1211f164fcaf.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
                    />
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.back ? <BackTop onClick={this.handleBackToTop}>回到顶部</BackTop> :null}
            </HomeWrapper>
        )
    }

    handleBackToTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeToTop);
    }
    /**
     * 当组件销毁的时候，要清除 window 上的事件监听，防止影响其他组件
     * **/
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeToTop);
    }
}

const mapStateToProps = (state) => ({
    back: state.getIn(['home', 'back']),
});

const mapDispatchToProps = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeToTop(){
        // console.log(document.documentElement.scrollTop);
        if (document.documentElement.scrollTop>100){
            dispatch(actionCreators.toTop(true));
        } else {
            dispatch(actionCreators.toTop(false));
        }
    }
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);