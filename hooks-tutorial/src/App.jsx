import { useState,useMemo, useEffect } from 'react'

import './App.css'

function App() {
  const [num,setNum]=useState(0);
  const [dark,setDark]=useState(false);
  // const doubleNumber=slowFun(num); ->normal render
  //useMemo uses a variable to store the previous variable  so if we use useMemo for every think it will consumes a lot of memory
  // referencial equlity - everytime we run the function a new themes(new object) is created even though the values are same,there reference are different
  
  //useCallBack is similar to useMemo but useMemo will only return the return value while the useCallback function will return the entire function
  
  
  
  const doubleNumber=useMemo(()=>{
    return slowFun(num);
  },[num])
  // const themes={
  //   backgroundColor: dark? 'black':'white',
  //   color: dark? 'white':'black'
  // }
  const themes=useMemo(()=>{
    return {
        backgroundColor: dark? 'black':'white',
        color: dark? 'white':'black'
    }
  },[dark])
  useEffect(()=>{
    console.log("theme changed")
  },[themes])

  return (
    <>
     <input type="number" value={num} onChange={e=>setNum(parseInt(e.target.value))}/>
     <button onClick={()=>setDark(prevDark=>!prevDark)}>Change Theme</button>
     <div style={themes}>{doubleNumber}</div>
    </>
  )
}

export default App

function slowFun(num){
         console.log("calling slow function")
         for(let i=0;i<=1000000000;i++){

         }
         return num*2;
}
