import React from 'react';
import {IToDo} from '../../models/models';
import * as s from './style';
import { useAppSelector } from '../../hooks/redux';
import TodoListItem from '../TodoListItem/TodoListItem';


const TodoLIst: React.FC = () => {

    const {todos} = useAppSelector(state => state.todoReducer)
    return (
        <s.ToDoContainer>
            {
                todos.map( (item: IToDo) => <s.ItemContainer key={item.id}> 
                                                <TodoListItem 
                                                    itemId = {item.id}
                                                    title = {item.title}
                                                    tasks = {item.tasks}
                                                />
                                            </s.ItemContainer> )
            }
        </s.ToDoContainer>
    )
}

export default TodoLIst;
