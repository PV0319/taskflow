import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";

function App(){
  const [tasks,setTasks]=useState([
    {id:1,text:"Learn React",done:false},
    {id:2,text:"Push project to the Github",done:false},
    {id:3,text:"Build a feature in react",done:false}

  ]);


    function toggleTask(id){
     setTasks(
      tasks.map((task)=> task.id===id?{...task, done:!task.done}:task
     )
     );
    }
    function addTask(text){
      const newTask={id:Date.now(),text:text,done:false}
      setTasks([...tasks,newTask]);
    }
    function deleteTask(id){
      setTasks(
        tasks.filter((task)=>task.id!==id)
      )
    }
    return (

    <div>
      <h1>Taskflow</h1>
      <AddTaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask}/>
    </div>
  )
}
export default App;
