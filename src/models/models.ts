
export interface TodoState {
    todos: IToDo[];
    loading: boolean;
    error: null | string;
}

export interface IToDo {
    id: string;
    title: string;
    tasks: ITask[] | null;
}

export interface ITask {
    id: string;
    txt: string;
    status: boolean;
}
