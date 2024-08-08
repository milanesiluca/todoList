import {  ReactElement } from "react";
import { ITaskData } from "../interfaces/interfaces";
import "../CSS/ToDoLCard.css"

interface ITaskProps{
    task: ITaskData;
    onDeleteClick: (task: ITaskData) => void;
    onDoneClick: (task: ITaskData) => void; 
    onEditClick: (task: ITaskData) => void;
    moveTaskUp: (task: ITaskData) =>void;
    moveTaskDown: (task: ITaskData) =>void;
    isFirst?: boolean;
    isLast?: boolean;
}

export function ToDoCard({task, onDeleteClick, onDoneClick, onEditClick, moveTaskUp, moveTaskDown, isFirst, isLast }: ITaskProps) : ReactElement {

    return(
        <section className="container-section">
            <span className={task.classes} >
                <div className="txt-container">
                    <p className="p-Layout">{task.name}</p>
                    <p className="p-Layout">{task.what}</p>
                </div>
                <div className="button-container">
                    <button className="btn" disabled={task.completed} onClick={() => onDoneClick(task)}>Done</button>
                    <button className="btn" onClick={() => onEditClick(task)}>Edit</button>
                    <button className="btn" onClick={() => onDeleteClick(task)}>Remove</button>
                </div>
            </span>   
            <div className="button-dir">
                <button className="dir-btn" onClick={() => moveTaskUp(task)} hidden={isFirst ? true : undefined}>
                    <span className="material-symbols-outlined">
                        arrow_drop_up
                    </span>
                </button>
                <button className="dir-btn" onClick={() => moveTaskDown(task)} hidden={isLast ? true : undefined}>
                    <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span>
                </button>
            </div>   
        </section>
    );
}

