import { useState } from 'react'
import './CSS/App.css'
import { ITaskData, IToDoListContext } from './interfaces/interfaces';
import { Footer } from './components/Footer';
import { useNavigate, Outlet } from 'react-router-dom';

function App() {

  const [tasks, setTasks] = useState<ITaskData[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<number>(-1);
  const [todos, setTodos] = useState<ITaskData[]>([])

  const navigate = useNavigate();

  const addNewTask = (newTask : ITaskData) => {
    setTasks([newTask, ...tasks]);
    setTaskToEdit(-1);
    updateFirstInList();
    updateLastInList();
  }

  const updateFirstInList = () => {
    setTodos(prevState => {
      const data = [...prevState];
      
      data[0] = {
          ...data[0],
          isFirst: true,
      };
      return data;
    });
    
    
  }
  const updateLastInList = () => {
    setTodos(prevState => {
      const data = [...prevState];
      data[tasks.length - 1] = {
          ...data[tasks.length - 1],
          isLast: true,
      };
      return data;
    });
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
    tasks[tsIndex].classes = ("card-container done-bg");
    setTasks([...tasks]);
  }

  const onEditClick = (task: ITaskData) => {
    setTaskToEdit(task.id);
    navigate("/");
  }


  const findSpecificTask = (id : number) : ITaskData => {
    const tsk=  tasks.findIndex((obj) => obj.id == id);
    return tasks[tsk];
  }

  const moveTaskUp = (task: ITaskData) => {
    const tsIndex = tasks.findIndex((obj) => obj.id == task.id)
    if (tsIndex > 0) {
      tasks.splice(tsIndex - 1, 0, tasks.splice(tsIndex, 1)[0]);
      setTasks([...tasks]);
    }
  }

  const moveTaskDown = (task: ITaskData) => {
    const tsIndex = tasks.findIndex((obj) => obj.id == task.id)
    if (tsIndex < tasks.length -1) {
      tasks.splice(tsIndex + 1, 0, tasks.splice(tsIndex, 1)[0]);
      setTasks([...tasks]);
    }
  }

  const sortByName = () => {
    tasks.sort(function(a,b) {
      var x = a.name.toLocaleLowerCase();
      var y = b.name.toLocaleLowerCase();
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    setTasks([...tasks]);
  }

  const sortByDate = () => {
    tasks.sort(function(a,b) {
      var x = a.created;
      var y = b.created;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    setTasks([...tasks]);
  }

  const sortByPriority = () => {
    tasks.sort(function(a,b) {
      var x = a.priority;
      var y = b.priority;
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
    setTasks([...tasks]);
  }


  const toDoContext : IToDoListContext = {
    tasks: tasks,
    idToEdit : taskToEdit,
    findSpecificTask,
    addNewTask,
    onDeleteClick,
    onDoneClick,
    onEditClick,
    moveTaskUp,
    moveTaskDown,
    sortByName,
    sortByDate,
    sortByPriority
  };

  
  return (
    <>
      <Outlet context={toDoContext}/>
      <Footer />
    </>
  )
}

export default App
