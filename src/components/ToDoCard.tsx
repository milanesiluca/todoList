import {  ReactElement } from "react";
import { ITaskData } from "../interfaces/interfaces";
import "../CSS/ToDoLCard.css"

interface ITaskProps{
    task: ITaskData;
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void; 
    onEditClick: (task: ITaskData) => void;
}

export function ToDoCard({task, onDeleteClick, onDoneClick, onEditClick}: ITaskProps) : ReactElement {



    return(
        <span className={task.classes}>
            <div className="txt-container">
                <p className="p-Layout">{task.name}</p>
                <p className="p-Layout">{task.what}</p>
            </div>
            <div className="button-container">
                <button className="btn" onClick={() => onDoneClick(task)}>Done</button>
                <button className="btn" onClick={() => onEditClick(task)}>Edit</button>
                <button className="btn" onClick={() => onDeleteClick(task)}>Remove</button>
            </div>
        </span>   
    );
}

