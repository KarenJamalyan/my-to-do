
export interface TodoState {
    todos: IToDo[];
    loading: boolean;
    error: null | string;
    editId: null | string;
}

export interface IToDo {
    id: string;
    title: string;
    tasks: any;
}

export interface ITask {
    id: string;
    txt: string;
    status: boolean;
}
