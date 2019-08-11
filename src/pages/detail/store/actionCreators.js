import axios from 'axios';
import * as actionTypes from './actionTypes';

const getChange = (title,content)=>({
    type:actionTypes.GET_CHANGE,
    title,
    content,
});

export const getContent = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+ id).then((res) => {
            dispatch(getChange(res.data.data.title,res.data.data.content));
        }).catch((err)=>{
            console.log(err);
        })
    }
};