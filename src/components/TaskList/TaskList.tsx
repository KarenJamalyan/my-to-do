import React from 'react';
import TaskListItem from '../TaskListItem/TaskListItem';
import * as s from './style';

const tasks = ['dsfdsf', 'dfsdfdsf', 'dfsdfsdf']

const TaskList: React.FC = () => {
    return(
        <s.List>
            {
                tasks.map((elem, item) => <s.ListItem key= {item} >
                                            <TaskListItem item= {elem} />
                                          </s.ListItem> )
            }
        </s.List>
    )
}

export default TaskList;
