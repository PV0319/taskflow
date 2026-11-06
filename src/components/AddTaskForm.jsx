import { useState , useRef} from "react";
import { useTasks } from "../context/useTasks.js";

function AddTaskForm(){
    const [text,setText]=useState("");
    const inputRef=useRef(null)
    const {addTask,tasks}=useTasks();
    const [error,setError]=useState();

    function handleAdd(){
        const trimmed=text.trim();
        if(trimmed===""){
            setError("Task cannot be empty");
            return ;
        }
        const duplicate=tasks.some((t)=>
            t.text.trim().toLowerCase()===trimmed.toLowerCase()
        );
        console.log(duplicate);
        if(duplicate){
            setError("Task cannot be duplicate.");
            return;
        }

         addTask(trimmed);
         setText("");
         setError("");
         inputRef.current.focus();
    }

    return (
        <>
        <input value={text} onChange={(e)=>setText(e.target.value)} ref={inputRef} />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button onClick={handleAdd} >Add task</button>
        </>
    )

}
export default AddTaskForm;