import React, {useState} from 'react';
import { ITask } from '../../models/models';
import * as s from './style';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';


const EditTodo: React.FC<{itemId: string, title: string, tasks: ITask[]}> = ({itemId, title, tasks}) => {
    const dispatch = useAppDispatch()
    const { changeTodo, changingId } = todoSlice.actions

    const [newTitle, setnewTitile] = useState<string>(title)

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(!newTitle === false){
            dispatch(changeTodo({ id: itemId, title: newTitle, tasks: tasks }));
            dispatch(changingId(null))
        }
    }

    return (
        <>
            <s.Input  type="text" name="todoText" value={newTitle} onChange={(e) => {setnewTitile(e.target.value)}} />
            <s.Button onClick={handleSubmit}> Edit </s.Button>
        </>
    )
}

export default EditTodo;
