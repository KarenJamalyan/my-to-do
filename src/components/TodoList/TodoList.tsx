import React from 'react';
import { IToDo } from '../../models/models';
import * as s from './style';
import TodoListItem from '../TodoListItem/TodoListItem';
import count from '../../utiles/count';


const TodoLIst: React.FC<{todos:IToDo[]}> = ({todos}) => {

   
    return (
        <s.ToDoContainer>
            <s.firstDiv>
            {
                todos.map((item: IToDo) => {
                    if(count(item.tasks)!= 100){
                    return <s.ItemContainer key={item.id}>
                                <TodoListItem
                                    itemId={item.id}
                                    title={item.title}
                                    tasks={item.tasks}
                                />
                            </s.ItemContainer> }
                    }) 
            }    
            </s.firstDiv>
            <s.secondDiv>
            {
                todos.map((item: IToDo) => {
                    if(count(item.tasks) == 100){
                    return <s.ItemContainer key={item.id}>
                                <TodoListItem
                                    itemId={item.id}
                                    title={item.title}
                                    tasks={item.tasks}
                                />
                            </s.ItemContainer> }
                    }) 
            }    
            </s.secondDiv>
            

        </s.ToDoContainer>
    )
}

export default TodoLIst;
