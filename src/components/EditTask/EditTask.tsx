import React, {useState} from 'react';
import { ITask } from '../../models/models';
import * as s from './style';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';


const EditTask: React.FC< {todoId: string, task: ITask}> = ({ todoId, task }) => {
    const dispatch = useAppDispatch();
    const { editTask, changingId } = todoSlice.actions;
    const [newTxt, setnewTxt] = useState<string>(task.txt);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(newTxt){
            dispatch(editTask({ todoId, task:{id: task.id, txt: newTxt, status: task.status }}));
            dispatch(changingId(null))
        }
    }

    return (
        <>
            <s.Input type="text" name="todoText" value={newTxt} onChange={(e) => {setnewTxt(e.target.value)}} />
            <s.Button onClick={handleSubmit}> Edit </s.Button>
        </> 
    )
}

export default EditTask;
