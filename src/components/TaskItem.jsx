import { useTasks } from "../context/useTasks.js"
import {Link} from "react-router-dom"
function TaskItem({task}){
    const {toggleTask,deleteTask}=useTasks();
    return (
        <>
        <li 
        onClick={() => {
           // console.log("li-- button onclick")
            toggleTask(task.id)
        }}
        style={{textDecoration:task.done?
        "line-through":"none", cursor:"pointer"}}>
            {task.text}

             <button onClick={(e)=>{
               // console.log("inner-- button onclick")
                e.stopPropagation();
                deleteTask(task.id);
            }}
             >Delete</button>
             
             <Link to={`tasks/${task.id}`} onClick={(e)=>e.stopPropagation()}>Details</Link>
        </li>
       
        </>
    )
}

export default TaskItem;