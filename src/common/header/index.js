import React, {Component} from "react";
import {Link} from "react-router-dom";
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,
    SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem,
} from "./style";
import {GlobalStyle} from "../static/iconfont/iconfont.js";
import {CSSTransition} from 'react-transition-group';
import {connect} from 'react-redux';
import {actionCreators} from "./store";
import {actionCreators as loginActionCreators} from '../../pages/login/store/';

/**
 *  阶段代码优化
 *  用解构赋值给 this.props.focused 以及其他的 this.props 变量方法赋值简化代码
 * **/
class Header extends Component {

    render() {
        const {focused, sign, list, handleInputFocus, handleInputBlur, handleLogout} = this.props;
        return (
            <HeaderWrapper>
                <GlobalStyle/>
                <Link to='/'><Logo/></Link>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    {
                        sign ?
                            <NavItem onClick={handleLogout} className='right'>退出</NavItem> :
                            <Link to='/login'>
                                <NavItem className='right'>登录</NavItem>
                            </Link>
                    }

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
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <span className={focused ? 'focused iconfont' : 'iconfont'}>&#xe714;</span>
                    </SearchWrapper>

                    {this.getListArea()}

                </Nav>
                <Addition>
                    <Link to='/write'>
                        <Button className='write'>
                            <span className="iconfont">&#xe616;</span>
                            写文章
                        </Button>
                    </Link>
                    <Button className='reg'>注册</Button>
                </Addition>
            </HeaderWrapper>
        );
    }

    getListArea() {
        const {focused, page, totalPage, list, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];
        if (newList.length) {
            for (let i = page * 10; i < (page + 1) * 10; i++) {
                if (newList[i]) {
                    // 在鼠标进入这个隐藏页的时候，因为数据有变化，所以会重新渲染一次
                    pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
                }
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch
                            onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
                        >
                            <span ref={(icon) => {
                                this.spinIcon = icon;
                            }} className="iconfont">&#xe851;</span>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
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
        list: state.getIn(['header', 'list']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        sign: state.getIn(['login', 'sign']),
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            // const action = SearchFocus();
            // dispatch(action);
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            console.log(list);
            dispatch(actionCreators.SearchFocus());
        },

        handleInputBlur() {
            const action = actionCreators.SearchBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            const action = actionCreators.MouseEnter();
            dispatch(action);
        },
        handleMouseLeave() {
            dispatch(actionCreators.MouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            // replace 这里。指的是在全局不区分大小写搜索，然后如果满足非数字，就用空字符串替代
            if (originAngle) {
                originAngle = parseInt(originAngle, 10);
            } else {
                originAngle = 0;
            }

            spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            // console.log(spin.style.transform);

            // ====================== 数据更换 =================================
            if (page < totalPage - 1) {
                dispatch(actionCreators.ChangePage(page + 1));
            } else {
                dispatch(actionCreators.ChangePage(0));
            }
        },
        handleLogout() {
            dispatch(loginActionCreators.getLogout())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);