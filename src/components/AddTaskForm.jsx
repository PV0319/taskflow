import { useState } from "react";

function AddTaskForm({onAdd}){
    const [text,setText]=useState("");

    function handleAdd(){
        if(text.trim()===""){
        console.log("Blocked:Empty input "); 
        return ;
        }
         
         onAdd(text)
        setText("");
    }

    return (
        <>
        <input value={text} onChange={(e)=>setText(e.target.value)} />
        <button onClick={handleAdd}>Add task</button>
        </>
    )

}
export default AddTaskForm;