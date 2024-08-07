import { useState } from 'react'
import './CSS/App.css'
import { ITaskData, IToDoListContext } from './interfaces/interfaces';
import { Footer } from './components/Footer';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState<ITaskData[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<ITaskData>();
  const navigate = useNavigate();

  const addNewTask = (newTask : ITaskData) => {
    setTasks([newTask, ...tasks]);
  }

  const onDeleteClick = (task: ITaskData) => {
    if (tasks.length === 1){
      navigate("/");
    }
    setTasks(tasks.filter((t) => t!= task));
  }

  
  const onDoneClick = (task: ITaskData) => {
    const tsIndex = tasks.findIndex((obj) => obj.id == task.id)
    tasks[tsIndex].completed = true;
    console.log(tasks[tsIndex].completed);
    tasks[tsIndex].classes = ("card-container done-bg");
    setTasks([...tasks]);
  }

  const onEditClick = (task: ITaskData) => {
    setTaskToEdit(task);
    navigate("/");
  }

  const resetTaskToEdit = () => {
    setTaskToEdit(undefined);
    console.log("id:", taskToEdit?.id);
  }
  
  const toDoContext : IToDoListContext = {
    tasks: tasks,
    taskToEdit,
    resetTaskToEdit,
    addNewTask,
    onDeleteClick,
    onDoneClick,
    onEditClick,
  };

  
  return (
    <>
      <Outlet context={toDoContext}/>
      <Footer />
    </>
  )
}

export default App
