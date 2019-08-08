import React, {Component, Fragment} from 'react';
import {GlobalStyle} from './style';
import Header from "./common/header";
import {BrowserRouter ,Route} from "react-router-dom";
import {Provider} from "react-redux";
import Home from './pages/home';
import Detail from "./pages/detail";


import store from "./store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <GlobalStyle/>
                    <Header/>
                    <BrowserRouter>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/detail" component={Detail} />
                    </BrowserRouter>
                </Fragment>
            </Provider>
        )
    }
}

export default App;
