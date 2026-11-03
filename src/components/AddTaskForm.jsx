import { useState , useRef} from "react";

function AddTaskForm({onAdd}){
    const [text,setText]=useState("");
    const inputRef=useRef(null)

    function handleAdd(){
        if(text.trim()===""){
        console.log("Blocked:Empty input "); 
        return ;
        }
         onAdd(text)
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