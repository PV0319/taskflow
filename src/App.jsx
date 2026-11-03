import { useState,useReducer,useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
//import useLocalStorage from "./hooks/useLocalStorage";
import tasksReducer from "./tasksReducer";

function App(){

 const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
  const saved = localStorage.getItem("tasks");
  return saved ? JSON.parse(saved) : [{ id: 1, text: "Testing done", done: false }];
});

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

  const [filter,setFilter]=useState("all");
 
  let visibleTasks=tasks;
  if (filter==="active"){
    visibleTasks=tasks.filter((task)=>!task.done);
  }
  if(filter==="done"){
    visibleTasks=tasks.filter((task)=>task.done);
  }

    function toggleTask(id){
       dispatch({type:"toggle",id});
    }
    function addTask(text){
      const newTask={id:Date.now(),text:text,done:false}
      dispatch({type:"add",task:newTask})
      
    }

    function deleteTask(id){
      dispatch({type:"delete",id})
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
