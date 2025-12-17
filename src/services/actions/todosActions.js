import axios from "axios"
import { TODOS_GET_FAILED, TODOS_GET_REQUEST, TODOS_GET_SUCCESS } from "../constant/todosConstants"


export const getAllTodos = () => async (dispatch) => {

    dispatch({ type: TODOS_GET_REQUEST })

    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        dispatch({ type: TODOS_GET_SUCCESS, payload: res.data })
    }
    catch (error) {
        dispatch({ type: TODOS_GET_FAILED, payload: error.message })
    };
};

