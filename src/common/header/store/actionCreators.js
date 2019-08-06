import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

export const SearchFocus = () => ({
    type: actionTypes.Search_Focus
});
export const SearchBlur = () => ({
    type: actionTypes.Search_Blur
});


const ChangeList = (data) => ({
    type: actionTypes.Change_List,
    data: fromJS(data)
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