import React, {Component, Fragment} from 'react';
import {GlobalStyle} from './style';
import Header from "./common/header";
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux";
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Login from './pages/login'
import Writer from './pages/writer'


import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <BrowserRouter>
                        <Header/>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/detail/:id" component={Detail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/write" component={Writer}/>
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
        // 对应的两种获取路由的方式
        // 1、动态路由
        // 2、to={'detail?id='}
        // <Route path="/detail/">
        // 获取 this.props.location.search,,然后处理字符串既可以 ？id=1
    }
}

export default App;
