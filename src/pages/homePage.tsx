import React, {useEffect, useState } from 'react';
import TodoLIst from '../components/TodoList/TodoList';
import { useAppSelector } from '../hooks/redux';
import { IToDo } from '../models/models';




const HomePage = () => {
    const { todos } = useAppSelector(state => state.todoReducer)
    const   [data, setData]= useState<IToDo[]>([])
    useEffect(() => {
        setData(todos)
    }, [todos])

    const handleSort = () =>{
         const sortedData = [...data].sort((a,b) =>{
            return a.title > b.title ? 1 : -1
         })
         setData(sortedData)
    }

    return (
        <>
            <button onClick={handleSort}> Sort A-Z</button>
            <TodoLIst todos ={data} />
        </>
    )

}

export default HomePage;
