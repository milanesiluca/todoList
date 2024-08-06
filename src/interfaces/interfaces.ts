export interface ITaskData {
    id: string;
    name: string;
    what: String;
    completed: boolean;
    classes: string;
}


export interface IToDoListContext {
    tasks : ITaskData[];
    addNewTask: (newTask: ITaskData) => void;
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void;
}