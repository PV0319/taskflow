function TaskItem({task,onToggle,onDelete}){
    return (
        <>
        <li 
        onClick={() => {
            console.log("li-- button onclick")
            onToggle(task.id)
        }}
        style={{textDecoration:task.done?
        "line-through":"none", cursor:"pointer"}}>
            {task.text}

             <button onClick={(e)=>{
                console.log("inner-- button onclick")
                e.stopPropagation();
                onDelete(task.id);
            }}
                >Delete</button>
        </li>
       
        </>
    )
}

export default TaskItem;