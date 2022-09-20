
export interface TodoState {
    todos: Array<IToDo>;
    loading: boolean;
    error: null | string;
}

export interface IToDo {
    id: string;
    title: string;
    task: Array<ITask>;
}

export interface ITask {
    id: string;
    txt: string;
    status: boolean;
}
