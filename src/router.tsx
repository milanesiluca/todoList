import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { InsertTaksFormPage } from "./Pages/ToDoFormPage";
import { TaskListPage } from "./Pages/TaskListPage";
import { TaskCounter } from "./Pages/NumberOfTaskPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<InsertTaksFormPage />} />
        <Route path="task-list" element={<TaskListPage />} />
        <Route path="tasks" element={<TaskCounter />} />
    </Route>
))