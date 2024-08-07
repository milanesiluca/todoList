import { ReactElement } from "react";
import "../CSS/TaskListPage.css";
import { ToDoCard } from "../components/ToDoCard";
import { IToDoListContext } from "../interfaces/interfaces";
import { useOutletContext } from "react-router-dom";

export function TaskListPage(): ReactElement {
  const context = useOutletContext<IToDoListContext>();

  return (
    <section>
        <span className="tool-bar">
            <button className="sort-btn" onClick={context.sortByName}>sort by name</button>
            <button className="sort-btn">sort by date</button>
        </span>
        <span className="tasklist">
        {context.tasks.map((task) => (
            <ToDoCard
            key={task.name}
            task={task}
            onDeleteClick={context.onDeleteClick}
            onDoneClick={context.onDoneClick}
            onEditClick={context.onEditClick}
            moveTaskUp={context.moveTaskUp}
            moveTaskDown={context.moveTaskDown}
            />
        ))}
        </span>
    </section>
  );
}
