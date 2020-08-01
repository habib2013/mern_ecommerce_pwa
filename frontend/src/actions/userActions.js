import axios from "axios";
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILED, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILED } from "../constants/userConstants";

const signin = (email,password) => async (dispatch) => {
 dispatch({type: USER_SIGNIN_REQUEST,payload: {email,password}});

 try {
    const {data} = await axios.post('/api/users/signin',{email,password});
    dispatch({type:USER_SIGNIN_SUCCESS,payload : data});
    Cookie.set('userInfo',JSON.stringify(data));
 } catch (error) {
   dispatch({type:USER_SIGNIN_FAILED,payload : error.message});
 }
}

const register = (email,password,name) => async (dispatch) => {
  dispatch({type: USER_REGISTER_REQUEST,payload: {email,password,name}});
 
  try {
     const {data} = await axios.post('/api/users/register',{email,password,name});
     dispatch({type:USER_REGISTER_SUCCESS,payload : data});
     Cookie.set('userInfo',JSON.stringify(data));
  } catch (error) {
    dispatch({type:USER_REGISTER_FAILED,payload : error.message});
  }
 }

export {signin,register}