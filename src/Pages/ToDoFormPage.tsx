import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";
import "../CSS/ToDoFormPage.css"
import { ITaskData, IToDoListContext } from "../interfaces/interfaces";
import { useOutletContext, useNavigate } from "react-router-dom";




export function InsertTaksFormPage() : ReactElement {

    const { addNewTask, tasks, taskToEdit } = useOutletContext<IToDoListContext>();

    const [name, setName] = useState<string>(taskToEdit ? taskToEdit.name : "");
    const [what, setWhat] = useState<string>(taskToEdit ? taskToEdit.what : "");
    const navigate = useNavigate();

    const handleTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    const handleSubTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setWhat(e.target.value);
    }

    const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (taskToEdit !== undefined ){
            taskToEdit.name = name;
            taskToEdit.what = what;
            navigate("task-list");
        } else {
            const taskObj : ITaskData = {
                id: tasks.length + 1,
                name: name,
                what: what,
                completed: false,
                classes: "card-container"
            }
    
            addNewTask(taskObj);
            setName("");
            setWhat("");
        }
    }

    return(
        <form className="form-container" onSubmit={saveTask}>
            <span className="card-form-container">
                <div className="txt-container">
                    <input className="input-Layout" type="text" placeholder="Who" value={name} onChange={handleTitle}/>
                    <input className="input-Layout" type="text" placeholder="What" value={what} onChange={handleSubTitle}/>
                </div>
                <div className="button-container">
                    <button className="save-btn" type="submit">SAVE</button>
                </div>
            </span>   
        </form>   
    );
}

