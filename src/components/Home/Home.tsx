import React, { useCallback, useEffect, useRef, useState } from 'react';
import TodoLIst from '../TodoList/TodoList';
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { IToDo } from '../../models/models';
import { todoSlice } from '../../store/reducers/todoSilce';
import Input from '../Input/Input';

const HomePage = () => {
    const { todos, sortStatus, filterValue } = useAppSelector(state => state.todoReducer)
    const dispatch = useAppDispatch()
    const { changeSortStatus, changeFilterValue } = todoSlice.actions
    const isSortedRef = useRef(false);
    const [data, setData] = useState<IToDo[]>([]);

    const handleSort = () => {
        dispatch(changeSortStatus(true))
    }

    const filter = useCallback((keyword: string) => {
        const filteredTodos = todos.filter((elem) => elem.title.toLowerCase().startsWith(keyword.toLowerCase()));
        const results: IToDo[] = keyword ? filteredTodos : todos;
        setData(results);
        dispatch(changeFilterValue(keyword))
    }, [changeFilterValue, dispatch, todos]);

    useEffect(() => {
        setData(todos);
    }, [todos]);

    useEffect(() => {
        filter(filterValue);
    }, [filterValue, filter]);

    useEffect(() => {
        if (sortStatus && data.length && !isSortedRef.current) {
            const sortedData = [...data].sort((a, b) => a.title > b.title ? 1 : -1);
            setData(sortedData);
            isSortedRef.current = true;
        }
    }, [data, sortStatus]);

    return (
        <>
            <div>
                <Input value={filterValue} fooChange={filter} />
                <button onClick={handleSort} > Sort A-Z </button>
            </div>
            <TodoLIst todos={data} />
        </>
    )

}

export default HomePage;
