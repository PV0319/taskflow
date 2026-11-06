import { useParams,Link } from "react-router-dom";
import {useTasks} from "../context/useTasks"
import { useState } from "react";

function TaskDetailPage(){
    const {id}=useParams();
    const {tasks,editTask}=useTasks();
    const [isEditing,setIsEditing]=useState(false);
    const [draft,setDraft]=useState("");
    const [error,setError]=useState("");
    
    const task=tasks.find((task)=>task.id===Number(id));
   
    if (!task) return <p>Task not found <Link to="/">Back</Link></p>

    function handleSave(){
        const trimmed=draft.trim();
    
        if(trimmed===""){
            setError("Task cannot  be empty.")
            return;
        }
         const duplicate=tasks.some((t)=>
        t.id!==task.id && t.text.trim().toLowerCase()===trimmed.toLowerCase()
        )
        console.log("duplicate:",duplicate);
        if(duplicate){
            setError("Task cannot be duplicate.")
            return;
        }
         console.log("duplicate:",duplicate);
         editTask(task.id,trimmed);
         setIsEditing(false);
         setError("");
    }

    return (
        <div>
         {isEditing?
         (
         <>
          <input value={draft} onChange={(e)=>setDraft(e.target.value)}/>
          {error &&  <p style={{color:"red"}}> Error</p>}
          <button onClick={handleSave}>Save</button>
          <button onClick={() =>{ setIsEditing(false); setError("")}}>Cancel</button>

         </>): (
         <>
            <h2>{task.text}</h2>
            <button onClick={() => { setDraft(task.text); setIsEditing(true); }}>Edit</button>
         </>
         )
       
         }
         <Link to="/">Back to list</Link>
       </div>
    )
    
}
export default TaskDetailPage;
