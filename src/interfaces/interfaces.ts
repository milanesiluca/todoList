export interface ITaskData {
    id: number;
    name: string;
    what: string;
    completed: boolean;
    classes: string;
}


export interface IToDoListContext {
    tasks : ITaskData[];
    taskToEdit?: ITaskData;
    resetTaskToEdit: (newTask: ITaskData) => void;
    addNewTask: (newTask: ITaskData) => void;
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void;
    onEditClick: (task: ITaskData) => void;
}