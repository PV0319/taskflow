function tasksReducer(tasks,action){
    if(action.type==="toggle"){
        return tasks.map((task) =>
      task.id === action.id ? { ...task, done: !task.done } : task
    );
    }

    if(action.type === "delete"){
        return  tasks.filter((task)=>task.id!==action.id);
    }

    if(action.type === "add"){
        return [...tasks,action.task];
    }
    
    if(action.type === "clear"){
       return tasks.filter((task)=>!task.done)
    }
    
    if(action.type ==="edit"){
        return tasks.map((task)=>
            task.id===action.id?{...task,text:action.text}:task
        );
    }
    return tasks;
}

export default tasksReducer;