import { useState } from 'react'
import './App.css'
import { ITaskData, IToDoListContext } from './interfaces/interfaces';
import { Footer } from './components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState<ITaskData[]>([]);

  const addNewTask = (newTask : ITaskData) => {
    setTasks([newTask, ...tasks]);
  }

  const onDeleteClick = (task: ITaskData) => {
    setTasks(tasks.filter((t) => t!= task));
  }

  
  const onDoneClick = (task: ITaskData) => {
    const tsIndex = tasks.findIndex((obj) => obj.what == task.what)
    tasks[tsIndex].completed = true;
    console.log(tasks[tsIndex].completed);
    tasks[tsIndex].classes = ("card-container done-bg");
    setTasks([...tasks]);
  }
  
  const toDoContext : IToDoListContext = {
    tasks: tasks,
    addNewTask,
    onDeleteClick,
    onDoneClick
  };

  
  return (
    <>
      <Outlet context={toDoContext}/>
      <Footer />
    </>
  )
}

export default App
