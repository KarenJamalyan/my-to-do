import {TodoState, IToDo} from "../../models/models"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TodoState = {
    todos: [
        { id:'000001', title:" Tasak mek 1", tasks: [{ id: '5454', txt: 'havaqel todu', status: false}] },
        { id:'000002', title:" Tasak mek 2", tasks: [{ id: '5252', txt: 'havaqel todu', status: false}] },
        { id:'000003', title:" Tasak mek 1", tasks: [{ id: '5456', txt: 'havaqel todu', status: false}, { id: '58456', txt: 'havaqel todu', status: false}] },
        { id:'000004', title:" Tasak mek 2", tasks: [{ id: '5259', txt: 'havaqel todu', status: false}] },
    ],
    error: null,
    editId: null,
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
            state.todos = state.todos.map((elem:IToDo) => (elem.id === action.payload.id) ?  action.payload : elem )
        },
        deleteTodo(state, action: PayloadAction<string>){
            state.todos = state.todos.filter(item => item.id !== action.payload )
        },
        changingId(state, action: PayloadAction<string | null>){
            state.editId = action.payload
        }
    }
})

export default todoSlice.reducer;
