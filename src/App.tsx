import { useState } from 'react'
import { InsertTaksForm } from './components/ToDoForm'
import './App.css'
import { ITaskData } from './interfaces/interfaces';
import { TaskList } from './components/TaskList';
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
      <InsertTaksForm insertTask={addNewTask}/>
      <TaskList taskList={tasks} onDeleteClick={onDeleteClick} onDoneClick={onDoneClick}/> 
      <Footer />
    </>
  )
}

export default App
