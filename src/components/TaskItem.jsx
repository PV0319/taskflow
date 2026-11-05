import { useTasks } from "../context/useTasks.js"
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
        </li>
       
        </>
    )
}

export default TaskItem;