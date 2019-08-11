import axios from "axios";
import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const getHomeAction = (result) => ({
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    commendList: result.commendList,
    WriterList: result.WriterList
});

const addHomeList = (list, page) => ({
    type: actionTypes.ADD_HOME_LIST,
    list: fromJS(list),
    page,
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(getHomeAction(result));
        });
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data.articleList;
            // console.log(result);
            dispatch(addHomeList(result, page + 1));
        });
    }
};

export const toTop = (top) => ({
    type:actionTypes.BACK_TO_TOP,
    top,
});