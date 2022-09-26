import {TodoState, IToDo, ITask} from "../../models/models"
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TodoState = {
    todos: [],
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
                   return { ...elem, tasks: [ action.payload.task , ...elem.tasks,]}
                }else{
                    return elem
                }    
            })
        },
        editTask(state, action: PayloadAction<{todoId:string, task:ITask}>) {
            state.todos = state.todos.map((elem) => {
                if(elem.id === action.payload.todoId){
                    const newTask = elem.tasks.map((item: ITask) => (item.id === action.payload.task.id) ? action.payload.task : item )
                    return { ...elem, tasks: newTask };
                }else{
                    return elem
                }
            })
        },
        editTaskStatus(state, action: PayloadAction<{todoId:string, task:ITask}>) {
            state.todos = state.todos.map((elem) => {
                if(elem.id === action.payload.todoId){
                    const filterTask = elem.tasks.filter((item: ITask) => item.id !== action.payload.task.id)
                    return { ...elem, tasks: [...filterTask, action.payload.task ] };
                }else{
                    return elem
                }
            })
        }
    }
})

export default todoSlice.reducer;
