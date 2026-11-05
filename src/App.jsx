import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm"
import { useTasks } from "./context/useTasks.js";

function App(){

const {tasks}=useTasks();
  const [filter,setFilter]=useState("all");
 
  let visibleTasks=tasks;
  if (filter==="active"){
    visibleTasks=tasks.filter((task)=>!task.done);
  }
  if(filter==="done"){
    visibleTasks=tasks.filter((task)=>task.done);
  }

    
    const remaining=tasks.filter((task)=>!task.done).length;
    return (

    <div>
      <h1>Taskflow</h1>
      <AddTaskForm />
      <button onClick={()=>setFilter("all")}>All</button>
      <button onClick={()=>setFilter("active")}>Active</button>
      <button onClick={()=>setFilter("done")}>Done</button>
     
      <TaskList tasks={visibleTasks} />
      <p>{remaining} tasks remaining</p>
    </div>
  )
}
export default App;



