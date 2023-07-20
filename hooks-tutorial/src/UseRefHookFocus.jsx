import React from 'react'
import { useState,useRef } from 'react';

const UseRefHookFocus = () => {
    const [name,setName]=useState();
    const refVar=useRef();
function focus(){
    refVar.current.focus();
}
  return (
    <>
    <input ref={refVar} value={name} onChange={e=>setName(e.target.value)}/>
    <div>The name is {name}</div>
    <button onClick={focus}>Focus on Input</button>
    </>
  )
}

export default UseRefHookFocus