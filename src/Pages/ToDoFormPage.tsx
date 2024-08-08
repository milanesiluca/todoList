import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";
import "../CSS/ToDoFormPage.css"
import { ITaskData, IToDoListContext } from "../interfaces/interfaces";
import { useOutletContext, useNavigate } from "react-router-dom";




export function InsertTaksFormPage() : ReactElement {

    const { addNewTask, tasks, idToEdit, findSpecificTask } = useOutletContext<IToDoListContext>();
  
    const taskEditDetails = findSpecificTask(idToEdit);

    const [name, setName] = useState<string>(taskEditDetails ? taskEditDetails.name : "");
    const [what, setWhat] = useState<string>(taskEditDetails ? taskEditDetails.what : "");
    const [classList, setClassList] = useState<string>("card-container");
    const [priority, setPriority] = useState<string>("1");
    const [priorityName, setPriorityName] = useState<string>("Low");
    const navigate = useNavigate();

    const handleTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    const handleSubTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setWhat(e.target.value);
    }

    const handlePriority: ChangeEventHandler<HTMLSelectElement> = (e) => {
        e.preventDefault();
        setPriority(e.target.value);
        switch (e.target.value){
            case "1":
                setPriorityName("Low");
                setClassList("card-container low-pr");
                break;
            case "2":
                setPriorityName("Medium");
                setClassList("card-container med-pr");
                break;
             case "3":
                setPriorityName("High");
                setClassList("card-container high-pr");
                break;
        }
        
    }

    const saveTask: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        var id = 0;
        if (idToEdit !== -1 ){
            id = idToEdit;
            const tsIndex = tasks.findIndex((obj) => obj.id == id);
            tasks.splice(tsIndex, 1); 
        } else {
            id = tasks.length + 1;
        }
        const taskObj : ITaskData = {
            id: id,
            name: name,
            what: what,
            completed: false,
            classes: classList,
            created: Date.now(),
            isFirst: undefined,
            isLast: undefined,
            priority : priority,
            priorityName: priorityName
        }

        addNewTask(taskObj);
        setName("");
        setWhat("");
        navigate("task-list");
    }



    return(
        <form className="form-container" onSubmit={saveTask}>
            <span className={classList}>
                <div className="txt-container">
                    <input className="input-Layout" type="text" placeholder="Who" value={name} onChange={handleTitle}/>
                    <input className="input-Layout" type="text" placeholder="What" value={what} onChange={handleSubTitle}/>
                    <select className="select-layout" value={priority} onChange={handlePriority}>
                        <option value="1">Priority - Low</option>
                        <option value="2">Priority - Medium</option>
                        <option value="3">Priority - High</option>
                    </select>
                </div>
                <div className="button-container">
                    <button className="save-btn" type="submit">SAVE</button>
                </div>
            </span>   
        </form>   
    );
}

