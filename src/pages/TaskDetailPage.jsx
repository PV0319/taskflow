import { useParams,Link } from "react-router-dom";
import {useTasks} from "../context/useTasks"

function TaskDetailPage(){
    const {id}=useParams();
    const {tasks}=useTasks();
    
    const task=tasks.find((task)=>task.id===Number(id));
   
    if (!task) return <p>Task not found <Link to="/">Back</Link></p>

    return (
        <div>
          <h2>{task.text}</h2>
          <p>Status: {task.done ? "Done" : "Not done"}</p>
          <Link to="/">Back to list</Link>
       </div>
    )
    
}
export default TaskDetailPage;
