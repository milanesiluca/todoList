import { ReactElement } from "react";
import { useOutletContext } from "react-router-dom"
import { IToDoListContext } from "../interfaces/interfaces";

export function TaskCounter() : ReactElement {

    const context = useOutletContext<IToDoListContext>();

    return <h1>Number of tasks: {context.tasks.length}</h1>
}