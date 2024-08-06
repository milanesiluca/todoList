import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";
import "../CSS/ToDoFormPage.css"
import { ITaskData, IToDoListContext } from "../interfaces/interfaces";
import { useOutletContext } from "react-router-dom";




export function InsertTaksFormPage() : ReactElement {

    const [name, setName] = useState<string>("");
    const [what, setWhat] = useState<string>("");
    const { addNewTask } = useOutletContext<IToDoListContext>();

    const handleTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    const handleSubTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setWhat(e.target.value);
    }


    const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const taskObj : ITaskData = {
            id: what,
            name: what,
            what: what,
            completed: false,
            classes: "card-container"
        }

        addNewTask(taskObj);
        setName("");
        setWhat("");
    }

    return(
        <form onSubmit={saveTask}>
            <span className="card-form-container">
                <div className="txt-container">
                    <input className="input-Layout" type="text" placeholder="Title" value={name} onChange={handleTitle}/>
                    <input className="input-Layout" type="text" placeholder="Note" value={what} onChange={handleSubTitle}/>
                </div>
                <div className="button-container">
                    <button className="save-btn" type="submit">SAVE</button>
                </div>
            </span>   
        </form>  
    );
}

