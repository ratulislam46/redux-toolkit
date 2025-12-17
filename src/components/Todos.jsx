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