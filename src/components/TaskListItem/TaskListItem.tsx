import React from 'react';
import { FaTrashAlt, FaPencilAlt, FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import * as s from './style';
import { ITask } from '../../models/models';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';


const TaskListItem: React.FC<{task:ITask, todoId: string}> = ({task, todoId}) => {

    const dispatch = useAppDispatch()
    const { deleteTask } = todoSlice.actions

    return(
        <>
            <p>{task.txt}</p>
            <s.Buttons>
                <span>
                    <FaPencilAlt />
                </span>
                <span>
                    <FaTrashAlt  onClick={() => {dispatch(deleteTask({ taskId: task.id, todoId: todoId }))}}    /> 
                </span>
            </s.Buttons>
        </>
    )
}

export default TaskListItem;