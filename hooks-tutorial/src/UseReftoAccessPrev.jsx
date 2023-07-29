import React, { useRef,useEffect, useState } from 'react'

const UseReftoAccessPrev = () => {
    const [name,setName]=useState('');
    const prevName=useRef('');
    useEffect(()=>{
        prevName.current=name;
    },[name])
  return (
    <>
    <input value={name} onChange={(e=>setName(e.target.value))}/>
    <div>my name is {name} and it used to be {prevName.current}</div>
    </>
  )
}

export default UseReftoAccessPrev