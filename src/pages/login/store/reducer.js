import {fromJS} from "immutable";
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    sign: false,
});


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return state.set('sign',action.data);
        case actionTypes.LOGOUT:
            return state.set('sign',false);
        default:
            return state;
    }
}