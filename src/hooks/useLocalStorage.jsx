import { useState,useEffect } from "react";

function useLocalStorage(key,fallback){
    const [value,setValue]=useState(()=>{
        const saved =localStorage.getItem(key);
        return saved?JSON.parse(saved):fallback;
        });

       useEffect(() => {                            
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]); 

  return [value,setValue];
}
export default useLocalStorage;