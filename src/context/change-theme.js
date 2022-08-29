import React, { useState } from "react";

//use to create the context 
export const Color_Change_context=React.createContext()


export function Color_Provider(props) {
    const [color,setcolor]=useState('dark');


  return (
    <Color_Change_context.Provider value={{setcolor,color}}>
        {props.children}
    </Color_Change_context.Provider>
  )


  
}

