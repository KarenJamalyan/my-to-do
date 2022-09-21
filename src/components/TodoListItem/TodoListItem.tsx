import React from 'react';
import { IToDo } from '../../models/models';
import * as s from './style';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import TaskList from '../TaskList/TaskList';


const TodoListItem: React.FC<{item:IToDo}> = (item) => {
return (
    <>
        <s.TopDiv>
            <h3> Titlee </h3>
            <span> 50% </span>
            <FaPencilAlt/>
            <FaTrashAlt/>
        </s.TopDiv>
        <TaskList />
    </>
)

}

export default TodoListItem;