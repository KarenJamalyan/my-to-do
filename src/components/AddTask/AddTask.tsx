import React, {useState} from 'react';
import * as s from './style';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/todoSilce';
import { BsPlusCircle } from 'react-icons/bs';


const AddTask: React.FC<{todoId:string}> = ({todoId}) => {

    const dispatch = useAppDispatch() 

    const { addTask } = todoSlice.actions
    const [ newTask, setnewTask ] = useState<string>('')
    const [ show, setshow ] = useState<boolean>(false)

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        if(newTask){
            dispatch(addTask({todoId, task:{ id:String(Date.now()), txt:newTask, status: false } } ));
            setnewTask('');
            setshow(false)
        }
    }
    return(
        show
        ?
            <>
                <s.Form onSubmit = {handleSubmit}>
                    <label htmlFor="todoText">
                        <s.AddInput type="text" name="todoText" value={newTask} onChange={(e) => {setnewTask(e.target.value)}} />
                    </label>
                        <s.AddButton type="submit" value="Submit" disabled={!newTask}>
                            Add
                        </s.AddButton>
                </s.Form>
            </>
        :
            <s.Icon> 
                <BsPlusCircle color='#008CBA' size='30px' onClick={() => setshow(true) }/>
            </s.Icon>

    )
}

export default AddTask;
