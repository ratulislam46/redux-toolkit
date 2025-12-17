import { TODOS_GET_FAILED, TODOS_GET_REQUEST, TODOS_GET_SUCCESS } from "../constant/todosConstants";


const initialState = {
    isLoading: false,
    todos: [],
    error: null
}

export const todosReducers = (state = initialState, action) => {
    switch (action.type) {
        case TODOS_GET_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case TODOS_GET_FAILED:
            return {
                isLoading: false,
                todos: [],
                error: action.payload,

            };
        case TODOS_GET_SUCCESS:
            return {
                isLoading: false,
                todos: action.payload,
                error: null
            };

        default:
            return state;
    }
}