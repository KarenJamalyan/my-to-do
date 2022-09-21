import {TodoState, IToDo} from "../../models/models"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TodoState = {
    todos: [
        { id:'000001', title:" Tasak mek 1", tasks: [{ id: '5454', txt: 'havaqel todu', status: false}] },
        { id:'000002', title:" Tasak mek 2", tasks: [{ id: '5252', txt: 'havaqel todu', status: false}] },
        { id:'000003', title:" Tasak mek 1", tasks: [{ id: '5456', txt: 'havaqel todu', status: false}] },
        { id:'000004', title:" Tasak mek 2", tasks: [{ id: '5259', txt: 'havaqel todu', status: false}] },
    ],
    error: null,
    loading: false
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<IToDo>){
            state.todos = [...state.todos, action.payload]
        },
        changeTodo(state, action: PayloadAction<IToDo>){
            // state.todos = state.todos.map((elem:IToDo) => elem.id === action.payload.id ? {...elem, elem.title: action.payload.title} : elem )
        }
    }
})


export default todoSlice.reducer;