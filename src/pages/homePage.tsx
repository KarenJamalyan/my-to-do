import React from 'react';
import AddTodo from '../components/AddTodo/AddTodo';
import TodoLIst from '../components/TodoList/TodoList';


const HomePage = () => {
    return (
        <>
            <AddTodo />
            <TodoLIst />
        </>
    )

}

export default HomePage;
