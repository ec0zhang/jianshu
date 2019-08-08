import React, {Component} from 'react';
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from "./components/Topic";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommend from "./components/Recommend";

class Home extends Component {

    render() {
        return(
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
            </HomeWrapper>
        )
    }
}

export default Home;