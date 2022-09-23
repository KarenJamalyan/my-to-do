import {TodoState, IToDo, ITask} from "../../models/models"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TodoState = {
    todos: [
        { id:'000001', title: 'Tasak mek 1', tasks: [{ id: '5454', txt: 'havaqel todu', status: false}] },
        { id:'000002', title: 'Tasak mek 2', tasks: [{ id: '5252', txt: 'havaqel todu', status: false}] },
        { id:'000003', title: 'Tasak mek 1', tasks: [{ id: '5456', txt: 'havaqel todu', status: false}, { id: '58456', txt: 'havaqel todu 5', status: false}] },
        { id:'000004', title: 'Tasak mek 2', tasks: [{ id: '5259', txt: 'havaqel todu', status: false}] },
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
        },
        deleteTask(state, action: PayloadAction<{taskId:string, todoId:string}>){
            state.todos = state.todos.map((elem) => {
                if(elem.id === action.payload.todoId){
                    let tasks:ITask[]  = elem.tasks.filter((item:ITask ) => item.id !== action.payload.taskId)
                   return { ...elem, tasks:tasks}
                }else{
                    return elem
                }    
            })
        },
        addTask(state, action: PayloadAction<{todoId:string, task:ITask}>) {
            state.todos = state.todos.map((elem) => {
                if(elem.id === action.payload.todoId){
                   return { ...elem, tasks: [...elem.tasks, action.payload.task]}
                }else{
                    return elem
                }    
            })
        },
        editTask(state, action: PayloadAction<{todoId:string, task:ITask}>) {

            const newTodos = state.todos.map((elem) => {
                if(elem.id === action.payload.todoId){
                    const newTask = elem.tasks.map((item: ITask) => (item.id === action.payload.task.id) ? action.payload.task : item )
                    return { ...elem, tasks: newTask };
                }else{
                    return elem
                }
            })
            state.todos = newTodos;
            
            
        }



    }
})

export default todoSlice.reducer;
