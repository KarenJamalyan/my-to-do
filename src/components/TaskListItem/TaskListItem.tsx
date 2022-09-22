import React from 'react';
import { FaTrashAlt, FaPencilAlt, FaRegCheckCircle, FaRegCircle } from 'react-icons/fa';
import * as s from './style';
import { ITask } from '../../models/models';


const TaskListItem: React.FC<{task:ITask, todoId: string}> = ({task, todoId}) => {
    return(
        <>
            <p>{task.txt}</p>
            <s.Buttons>
                <span>
                    <FaTrashAlt />  
                </span>
                <span>
                    <FaPencilAlt /> 
                </span>
            </s.Buttons>
        </>
    )
}

export default TaskListItem;