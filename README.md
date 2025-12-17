# 📝 Todos App (Redux + Axios)

A simple **Todos application** built with **React**, **Redux (Thunk)**, and **Axios**.
This project demonstrates how to manage **global state**, handle **async API calls**, and structure Redux properly.

---

## 🚀 Features

* Fetch todos from external API
* Redux state management
* Async actions using Redux Thunk
* Loading & error handling
* Clean and beginner-friendly structure

---

## 🛠️ Tech Stack

* React
* Redux
* Redux Thunk
* Axios
* JavaScript (ES6)

---

## 📂 Project Structure

```
src/
├── services/
│   ├── actions/
│   │   └── todosActions.js
│   ├── constant/
│   │   └── todosConstants.js
│   ├── reducers/
│   │   └── todosReducers.js
│   └── store.js
├── components/
│   └── Todos.jsx
└── App.jsx
```

---

## 🔗 API Used

* JSONPlaceholder Todos API
  `https://jsonplaceholder.typicode.com/todos`

---

## 🧩 Redux Constants

```js
// redux/constants/todosConstants.js
export const TODOS_GET_REQUEST = "TODOS_GET_REQUEST";
export const TODOS_GET_FAILED = "TODOS_GET_FAILED";
export const TODOS_GET_SUCCESS = "TODOS_GET_SUCCESS";
```

---

## ⚙️ Redux Async Action (Axios)

```js
// redux/actions/todosActions.js
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


```

---

## 🧠 Redux Reducer

```js
// redux/reducers/todosReducer.js
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
```

---

## 🏪 Redux Store Setup

```js
// redux/store.js
import { applyMiddleware, createStore } from "redux";
import { todosReducers } from "./services/reducers/todosReducers";
import { thunk } from "redux-thunk";


const store = createStore(todosReducers, applyMiddleware(thunk));

export default store;
```

---

## 🖥️ Using Redux in Component

```js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodos } from '../services/actions/todosActions';

const Todos = () => {
    const { isLoading, error, todos } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos())
    }, [dispatch])
    return (
        <div>
            <h2>Todos Data Here</h2>
            {isLoading && <h3>Loading . . .</h3>}
            {error && <h3>{error.message}</h3>}
            <section className='todo-body'>
                {todos && todos.map((todo) => {
                    const { id, title} = todo;;
                    console.log(todo);
                    return <div key={id} className='card'>
                        <h3>{id}</h3>
                        <h3>{title}</h3>
                    </div>
                })}
            </section>
        </div>
    );
};

export default Todos;
```

---

## ▶️ How to Run

```bash
npm install
npm start
```

---

## 📌 Learning Outcome

* Understand Redux workflow
* Handle async API calls
* Use Axios with Redux Thunk
* Manage loading & error states

---

## 🙌 Author

**Md Ratul Howlader**
Junior Frontend / MERN Developer


