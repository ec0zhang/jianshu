import * as actionTypes from './actionTypes';
import {fromJS} from "immutable";

const defaultState = fromJS({
    focused: false,
    list: [],
});

export default (state = defaultState, action) => {
    // 多个 if 语句可以使用 switch 语句改写精简代码
    // if (action.type === actionTypes.Search_Focus) {
        /**
         *     immutable 对象的 set 方法 ，会结合之前 immutable 对象的值
         * 和设置的值，然后返回一个全新的对象
         *     并不是直接改变 state
         **/
    //     return state.set('focused', true);
    // }
    // if (action.type === actionTypes.Search_Blur) {
    //     return state.set('focused', false);
    // }
    //
    // if (action.type === actionTypes.Change_List) {
    //     return state.set('list',action.data);
    // }
    //
    // return state;

    switch(action.type){
        case actionTypes.Search_Focus:
            return state.set('focused', true);
        case actionTypes.Search_Blur:
            return state.set('focused', false);
        case actionTypes.Change_List:
            return state.set('list',action.data);
        default:
            return state;
    }
}