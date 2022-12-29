import axios from "axios";
import { ADD_TASK_ERROR, ADD_TASK_LOADING, ADD_TASK_SUCCESS, DELETE_TASK_ERROR, DELETE_TASK_LOADING, DELETE_TASK_SUCCESS, GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./Task.types";


let token = localStorage.getItem("token") || "";
 
export const getTaskAPI = () => async (dispatch) => { 
    dispatch({ type: GET_TASK_LOADING });
    console.log(process.env.REACT_APP_API_KEY,'api our backend')
    try {
        const res = await axios.get(`${process.env.REACT_APP_API_KEY}/task`, {
            headers: {
                authorization: token 
            }
        })
        dispatch({ type: GET_TASK_SUCCESS, payload: res.data })
        console.log("Outside tasks")
    } catch (er) {
        dispatch({ type: GET_TASK_ERROR })
    }

}


export const postTaskAPI = (data) => async (dispatch) => {

    dispatch({ type: ADD_TASK_LOADING });
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_KEY}/task`, data, {
            headers: {
                authorization: token,
            }   
        })
        dispatch(getTaskAPI())
        console.log("Post successsfull")
        dispatch({ type: ADD_TASK_SUCCESS, payload: res.data })
    } catch (er) {
        dispatch({ type: ADD_TASK_ERROR })
        console.log(er)
    }
}


