import { useState } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App(){
  const [tasks, setTasks] = useLocalStorage("tasks", [
  { id: 1, text: "Testing done", done: false },
  { id: 2, text: "Learn react", done: false },
]);

  const [filter,setFilter]=useState("all");
 
  let visibleTasks=tasks;
  if (filter==="active"){
    visibleTasks=tasks.filter((task)=>!task.done);
  }
  if(filter==="done"){
    visibleTasks=tasks.filter((task)=>task.done);
  }

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
    const remaining=tasks.filter((task)=>!task.done).length;
    return (

    <div>
      <h1>Taskflow</h1>
      <AddTaskForm onAdd={addTask}/>
      <button onClick={()=>setFilter("all")}>All</button>
      <button onClick={()=>setFilter("active")}>Active</button>
      <button onClick={()=>setFilter("done")}>Done</button>
     
      <TaskList tasks={visibleTasks}  onToggle={toggleTask} onDelete={deleteTask}/>
      <p>{remaining} tasks remaining</p>
    </div>
  )
}
export default App;
