import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";
import "../CSS/ToDoForm.css"
import { ITaskData } from "../interfaces/interfaces";


interface IAddTaskProps {
    insertTask: (newTask : ITaskData) => void;
}

export function InsertTaksForm({insertTask} : IAddTaskProps) : ReactElement {

    const [title, setTitle] = useState<string>("");
    const [subTitle, setSubTitle] = useState<string>("");

    const handleTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setTitle(e.target.value);
    }
    const handleSubTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setSubTitle(e.target.value);
    }


    const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const taskObj : ITaskData = {
            id: title,
            title: title,
            subtitle: subTitle,
            completed: false,
            classes: "card-container"
        }

        insertTask(taskObj);
        setTitle("");
        setSubTitle("");
    }

    return(
        <form onSubmit={saveTask}>
            <span className="card-form-container">
                <div className="txt-container">
                    <input className="input-Layout" type="text" placeholder="Title" value={title} onChange={handleTitle}/>
                    <input className="input-Layout" type="text" placeholder="Note" value={subTitle} onChange={handleSubTitle}/>
                </div>
                <div className="button-container">
                    <button className="save-btn" type="submit">SAVE</button>
                </div>
            </span>   
        </form>  
    );
}

