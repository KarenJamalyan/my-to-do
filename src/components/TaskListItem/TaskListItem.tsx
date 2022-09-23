import React, {useState} from 'react';
import { FaTrashAlt, FaPencilAlt} from 'react-icons/fa';
import * as s from './style';
import { ITask } from '../../models/models';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';
import EditTask from '../EditTask/EditTask';


const TaskListItem: React.FC<{task:ITask, todoId: string}> = ({task, todoId}) => {

    const {editId} = useAppSelector(state => state.todoReducer)
    const dispatch = useAppDispatch()
    const { deleteTask, changingId, editTask } = todoSlice.actions
    const  txtDecoration = task.status ?  'line-through' : 'none'
    return(
        
        editId === task.id
        ?
        <EditTask  todoId = {todoId } task = {task}/>
        :
        <>
        <s.Txt 
            onClick={() => {dispatch(editTask({ todoId, task:{id: task.id, txt: task.txt, status: !task.status }}))}}
            style={{textDecoration: txtDecoration }} >
                {task.txt}
        </s.Txt>
        <s.Buttons>
            <span>
                <FaPencilAlt onClick={() => {dispatch(changingId(task.id))}} />
            </span>
            <span>
                <FaTrashAlt  onClick={() => { !task.status &&  dispatch(deleteTask({ taskId: task.id, todoId: todoId })) }} /> 
            </span>
        </s.Buttons>
    </>
        
    )
}

export default TaskListItem;