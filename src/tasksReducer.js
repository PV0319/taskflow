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
    
    return tasks;
}

export default tasksReducer;