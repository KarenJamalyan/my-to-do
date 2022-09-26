import React from 'react';
import { ITask } from '../../models/models';
import * as s from './style';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';
import TaskList from '../TaskList/TaskList';
import { todoSlice } from '../../store/reducers/todoSilce';
import { useAppDispatch, useAppSelector} from '../../hooks/redux';
import EditTodo  from '../EditTodo/EditTodo';
import AddTask from '../../components/AddTask/AddTask';
import count from '../../utiles/count';


const TodoListItem: React.FC<{itemId: string, title: string, tasks: ITask[]}> = ({itemId, title, tasks}) => {
    const {editId} = useAppSelector(state => state.todoReducer)
    const {deleteTodo, changingId} = todoSlice.actions
    const dispatch = useAppDispatch() 

    return (
    <>
        { 
            editId !== itemId
        ? (
            <s.TopDiv>
                <s.Title> {title} </s.Title>
                <s.Percent>
                    {count(tasks) ? count(tasks) : '--' } %
                </s.Percent>
                <s.Buttons>
                    <span onClick={() => dispatch(changingId(itemId))}>
                        <FaPencilAlt color='#008CBA'/>
                    </span>
                    <span onClick={() => dispatch(deleteTodo(itemId))}>
                        <FaTrashAlt color='#008CBA'/>
                    </span>
                </s.Buttons>
            </s.TopDiv>
        )
        :
        (
            <EditTodo
                itemId={itemId}
                title={title}
                tasks={tasks}
             />
        )
        }
        <s.Line />
        <s.Body>
            <TaskList tasks={tasks} todoId={itemId} />
            <AddTask  todoId={itemId} />
        </s.Body>
    </>
)

}

export default TodoListItem;
