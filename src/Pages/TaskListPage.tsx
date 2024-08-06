import  { ReactElement } from "react"
import "../CSS/TaskListPage.css"
import { ToDoCard } from "../components/ToDoCard"
import { ITaskData, IToDoListContext} from "../interfaces/interfaces"
import { useOutletContext } from "react-router-dom"



export function TaskListPage() : ReactElement {

    const context = useOutletContext<IToDoListContext>();

    return(
        <span className="tasklist">
            {context.tasks.map((task) => (
                <ToDoCard key={task.title} task={task} onDeleteClick={context.onDeleteClick} onDoneClick={context.onDoneClick}/>
            ))}
        </span>
    );

}