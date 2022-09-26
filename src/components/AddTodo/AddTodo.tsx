import React, {useState} from 'react';
import * as s from './style';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';


const AddTodo: React.FC = () => {

    const dispatch = useAppDispatch() 

    const { addTodo } = todoSlice.actions
    const [newTodo, setnewTodo] = useState<string>('')

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(newTodo){
            dispatch(addTodo({ id:String(Date.now()), title:newTodo, tasks: [] }));
            setnewTodo('');
        }
    }
    return(
        <>
            <s.Title>Add ToDo</s.Title>
            <s.Form onSubmit={handleSubmit}>
                <label htmlFor="todoText">
                    <s.AddInput type="text" name="todoText" value={newTodo} onChange={(e) => {setnewTodo(e.target.value)}} />
                </label>
                    <s.AddButton type="submit" value="Submit" disabled={!newTodo}>
                        Add
                    </s.AddButton>
            </s.Form>
        </>
    )
}

export default AddTodo;
