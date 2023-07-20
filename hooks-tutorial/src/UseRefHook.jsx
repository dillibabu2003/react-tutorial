import React, { useEffect, useRef,useState } from 'react'

const UseRefHook = () => {
    const [name,setName]=useState('')
    const renderCount=useRef(1);
    const [val,setVal]=useState(0)
    useEffect(()=>{
        renderCount.current=renderCount.current+1;
    })
  return (
   <>
   <input value={name} onChange={e=>setName(e.target.value)}/>
   <div>my name is {name}</div>
   <div>I rendered {renderCount.current}</div>
   </>
  )
}

export default UseRefHook