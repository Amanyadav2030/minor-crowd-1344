import axios from "axios";
import { AUTH_LOGIN_ERROR, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS, AUTH_LOGOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./auth.types";





export const loginApi = (creds) => async (dispatch) => {
    console.log(creds, "Inside Loginapi")

    dispatch({ type: AUTH_LOGIN_LOADING });
    try {
        let response = await axios.post(`${process.env.REACT_APP_API_KEY}/user/login`, creds);
        // let response = await axios.post(`${process.env.REACT_APP_BACKEND_API_KEY}/users/login`, creds);
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: response.data,
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: AUTH_LOGIN_ERROR
        })
    }
};
export const signupApi = (creds) => async (dispatch) => {
    console.log(creds)
    dispatch({ type: AUTH_SIGNUP_LOADING });
    try {
        let response = await axios.post(`${process.env.REACT_APP_API_KEY}/user/signup`, creds);

        dispatch({
            type: AUTH_SIGNUP_SUCCESS,
            payload: response.data.token
        });
    } catch (e) {
        console.log(e);
        dispatch({
            type: AUTH_SIGNUP_ERROR
        })
    }
};


export const logoutAPI = () => async (dispatch) => {
    dispatch({ type: AUTH_LOGOUT })
}
