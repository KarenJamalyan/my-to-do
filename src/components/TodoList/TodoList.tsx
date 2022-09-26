import React from 'react';
import { IToDo } from '../../models/models';
import * as s from './style';
import TodoListItem from '../TodoListItem/TodoListItem';
import count from '../../utiles/count';


const TodoLIst: React.FC<{todos:IToDo[]}> = ({todos}) => {

   
    return (
        <s.ToDoContainer>
            <s.secondDiv>
                <s.ProTitle>in Process</s.ProTitle>
                <div style={{ display: 'flex', justifyContent: 'center',   flexDirection: 'column', alignItems: 'center' }}>
                    {
                        todos.map((item: IToDo) =>  count(item.tasks)!== 100   &&
                             <s.ItemContainer key={item.id}>
                                <TodoListItem
                                    itemId={item.id}
                                    title={item.title}
                                    tasks={item.tasks}
                                />
                            </s.ItemContainer> ) 
                    }   
                </div>
            </s.secondDiv>
            <s.secondDiv>
                <s.ProTitle>Done</s.ProTitle>
                <div style={{ display: 'flex', justifyContent: 'center',   flexDirection: 'column', alignItems: 'center' }}>
                    {
                        todos.map((item: IToDo) =>  count(item.tasks) === 100   &&
                             <s.ItemContainer key={item.id}>
                                <TodoListItem
                                    itemId={item.id}
                                    title={item.title}
                                    tasks={item.tasks}
                                />
                            </s.ItemContainer> ) 
                    }
                </div>
            </s.secondDiv>
        </s.ToDoContainer>
    )
}

export default TodoLIst;
