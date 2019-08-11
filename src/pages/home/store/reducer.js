import {fromJS} from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    commendList: [],
    WriterList: [],
    articlePage: 1,
    back: false,
});

const changeHomeData = (state, action) => {
    return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        commendList: fromJS(action.commendList),
        WriterList: fromJS(action.WriterList),
    });
};

const addHomeList = (state, action) => {
    return state.merge({
        articleList: state.get('articleList').concat(action.list),
        articlePage: action.page,// 让 page 实现 +1
    });
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_HOME_DATA:
            return changeHomeData(state, action);
        case actionTypes.ADD_HOME_LIST:
            return addHomeList(state, action);
        case actionTypes.BACK_TO_TOP:
            return state.set('back', action.top);
        default:
            return state;
    }
}