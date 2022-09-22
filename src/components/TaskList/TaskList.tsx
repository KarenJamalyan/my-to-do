import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import * as s from './style';
import { ITask } from '../../models/models';


const tasks = ['dsfdsf', 'dffdsfdfsdfdsf', 'dfsdfsdf']

const TaskList: React.FC<{tasks:ITask[], todoId: string}> = ({tasks, todoId}) => {
    return(
        <s.List>
            {
            tasks !== null  &&   tasks.map((elem: ITask) => <s.ListItem key= {elem.id} >
                                                                <TaskListItem
                                                                    task = {elem}
                                                                    todoId = {todoId} />
                                                            </s.ListItem> )
            }
        </s.List>
    )
}

export default TaskList;
