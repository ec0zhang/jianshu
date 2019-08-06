import React, {Component} from "react";
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem,
} from "./style";
import {GlobalStyle} from "../static/iconfont.js";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from "./store";
// import mapStateToProps from "react-redux";
// import mapDispatchToProps from "react-redux";似乎是不需要引入的


/**
 *  阶段代码优化
 *  用解构赋值给 this.props.focused 以及其他的 this.props 变量方法赋值简化代码
 * **/
class Header extends Component {
    render() {
        const {focused, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <GlobalStyle/>
                <Logo href={'/'}/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登录</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            classNames="slide"
                            in={focused}
                            timeout={200}
                        >
                            <NavSearch
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe714;</span>
                    </SearchWrapper>

                    {this.getListArea()}

                </Nav>
                <Addition>
                    <Button className='write'>
                        <span className="iconfont">&#xe616;</span>
                        写文章
                    </Button>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {
        const {focused} = this.props;
        if (focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {this.props.list.map((item) => {
                            return (
                                <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            )
                        })}
                    </SearchInfoList>
                </SearchInfo>
            );
        } else {
            return null;
        }

    }

}


const mapStateToProps = (state) => {
    return {
        // Todo 从reducer中取数据
        // focused: state.get('header').get('focused'),
        // getIn 方法和上面的 get 连写的方法实现的同样的内容
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            // const action = SearchFocus();
            // dispatch(action);
            dispatch(actionCreators.getList());
            dispatch(actionCreators.SearchFocus());
        },

        handleInputBlur() {
            const action = actionCreators.SearchBlur();
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);