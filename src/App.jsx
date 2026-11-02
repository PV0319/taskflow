import { useState } from "react";
import TaskList from "./components/TaskList";

function App(){
  const [tasks,setTasks]=useState([
    {id:1,text:"Learn React",done:false},
    {id:2,text:"Push project to the Github",done:false},
    {id:3,text:"Build a feature in react",done:true}

  ]);
  return (
    
    <div>
      <h1>Taskflow</h1>
      <TaskList tasks={tasks}/>


    </div>
  )
}
export default App;
