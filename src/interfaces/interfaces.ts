export interface ITaskData {
    id: number;
    name: string;
    what: string;
    completed: boolean;
    classes: string;
}


export interface IToDoListContext {
    tasks : ITaskData[];
    idToEdit : number;
    findSpecificTask: (id: number) => ITaskData;
    addNewTask: (newTask: ITaskData) => void;
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void;
    onEditClick: (task: ITaskData) => void;
    moveTaskUp:(task: ITaskData) => void;
    moveTaskDown:(task: ITaskData) => void;
    sortByName: () => void;
    sortByDate: () => void;
}