import { useState } from 'react'
import { InsertTaksFormPage } from './Pages/ToDoFormPage'
import './App.css'
import { ITaskData } from './interfaces/interfaces';
import { TaskListPage } from './Pages/TaskListPage';
import { Footer } from './components/Footer';

function App() {

  const [tasks, setTasks] = useState<ITaskData[]>([]);

  const addNewTask = (newTask : ITaskData) => {
    setTasks([newTask, ...tasks]);
  }

  const onDeleteClick = (task: ITaskData) => {
    setTasks(tasks.filter((t) => t!= task));
  }

  const onDoneClick = (task: ITaskData) => {
    console.log(task.title);
    console.log(task.completed);
    const tsIndex = tasks.findIndex((obj) => obj.title == task.title)
    tasks[tsIndex].completed = true;
    console.log(tasks[tsIndex].completed);
    tasks[tsIndex].classes = ("card-container done-bg");
    setTasks([...tasks]);
  }

  return (
    <>
      <InsertTaksFormPage insertTask={addNewTask}/>
      <TaskListPage taskList={tasks} onDeleteClick={onDeleteClick} onDoneClick={onDoneClick}/> 
      <Footer />
    </>
  )
}

export default App
