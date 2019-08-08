import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';


const ChangeList = (data) => ({
    type: actionTypes.Change_List,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10),
});


export const SearchFocus = () => ({
    type: actionTypes.Search_Focus,
});
export const SearchBlur = () => ({
    type: actionTypes.Search_Blur,
});

export const MouseEnter = () => ({
    type: actionTypes.Mouse_Enter,
});
export const MouseLeave = () => ({
    type: actionTypes.Mouse_Leave,
});
export const ChangePage = (page) => ({
    type: actionTypes.Change_Page,
    page,
});

// ====== redux-thunk ===========

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then(
            (res) => {
                const data = res.data;
                dispatch(ChangeList(data.data));
            }
        ).catch(() => {
            console.log('Error');
        })
    }
};