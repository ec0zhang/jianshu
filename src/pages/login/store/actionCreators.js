import axios from 'axios';
import * as actionTypes from './actionTypes';


const Login = (data)=>({
   type:actionTypes.LOGIN,
   data,
});

export const getLogin = (account, password) => {
    return (dispatch) => {
        axios.get('/api/login.json?account' + account + '&password' + password).then((res) => {
            dispatch(Login(res.data.data));
        }).catch((err) => {
            console.log(err);
        })
    }
};
export const getLogout = ()=>({
    type:actionTypes.LOGOUT,
});