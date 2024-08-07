import { ChangeEventHandler, FormEventHandler, ReactElement, useState } from "react";
import "../CSS/ToDoFormPage.css"
import { ITaskData, IToDoListContext } from "../interfaces/interfaces";
import { useOutletContext, useNavigate } from "react-router-dom";




export function InsertTaksFormPage() : ReactElement {

    const { addNewTask, tasks, idToEdit, findSpecificTask } = useOutletContext<IToDoListContext>();
  
    const taskEditDetails = findSpecificTask(idToEdit);

    const [name, setName] = useState<string>(taskEditDetails ? taskEditDetails.name : "");
    const [what, setWhat] = useState<string>(taskEditDetails ? taskEditDetails.what : "");
    const navigate = useNavigate();

    const handleTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    const handleSubTitle : ChangeEventHandler<HTMLInputElement> = (e) => {
        setWhat(e.target.value);
    }

    /*
    const setTodos(tasks.map( todo => { 
        if ( todo.id !== idToEdit ) return todo;
     
        return { ...todo, 
                     name: "new name", 
                     what: "new what" 
                    }
    } ) )
*/
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
            classes: "card-container",
            created: Date.now()
        }

        addNewTask(taskObj);
        setName("");
        setWhat("");
        navigate("task-list");
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

