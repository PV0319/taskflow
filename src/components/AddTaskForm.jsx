import { useState , useRef} from "react";
import { useTasks } from "../context/useTasks.js";

function AddTaskForm(){
    const [text,setText]=useState("");
    const inputRef=useRef(null)
    const {addTask}=useTasks();

    function handleAdd(){
        if(text.trim()===""){
        console.log("Blocked:Empty input "); 
        return ;
        }
         addTask(text)
         setText("");
         inputRef.current.focus();
    }

    return (
        <>
        <input value={text} onChange={(e)=>setText(e.target.value)} ref={inputRef} />
        <button onClick={handleAdd} >Add task</button>
        </>
    )

}
export default AddTaskForm;