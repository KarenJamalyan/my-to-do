import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from './reducers/todoSilce'
// import {postAPI} from "../services/PostService";

const rootReducer = combineReducers({
    todoReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
    //     middleware: (getDefaultMiddleware) =>
    //         getDefaultMiddleware()
    //             .concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']