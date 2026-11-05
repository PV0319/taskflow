import {useReducer,useEffect } from "react";
import { TasksContext } from "./TasksContext.js";
import tasksReducer from "../tasksReducer.js";

export function TasksProvider({children}){

     const [tasks, dispatch] = useReducer(tasksReducer, [], () => {
      const saved = localStorage.getItem("tasks");
      return saved ? JSON.parse(saved) : [{ id: 1, text: "Testing done", done: false }];
    });
    
    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    function addTask(text){
      const newTask={id:Date.now(),text:text,done:false}
      dispatch({type:"add",task:newTask})
      
    }
    function toggleTask(id){
       dispatch({type:"toggle",id});
    }

    function deleteTask(id){
      dispatch({type:"delete",id})
    }

    function clearCompleted(){
      dispatch({type:"clear"})
    }

    return (
        <TasksContext.Provider value={{tasks,addTask,toggleTask,deleteTask,clearCompleted}}>
          {children}
        </TasksContext.Provider>
    )
    
}
