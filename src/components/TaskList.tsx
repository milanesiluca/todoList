import  { ReactElement } from "react"
import "../CSS/TaskList.css"
import { ToDoCard } from "./ToDoCard"
import { ITaskData} from "../interfaces/interfaces"

interface ITaskPros {
    taskList : ITaskData[];
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void;
}

export function TaskList({taskList, onDeleteClick, onDoneClick} : ITaskPros) : ReactElement {

    return(
        <span className="tasklist">
            {taskList.map((task) => (
                <ToDoCard key={task.title} task={task} onDeleteClick={onDeleteClick} onDoneClick={onDoneClick}/>
            ))}
        </span>
    );

}