import {TodoState, IToDo,  } from "../../models/models"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TodoState = {
    todos: [
        { id:'000001', title:" Tasak mek 1", task: [{ id: '5454', txt: 'havaqel todu', status: false}]},
        { id:'000002', title:" Tasak mek 2", task: [{ id: '5252', txt: 'havaqel todu', status: false}]},

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

    }
})


export default todoSlice.reducer;