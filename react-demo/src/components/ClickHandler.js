import React, { useState } from 'react'

const ClickHandler = () => {
    const [counter , setCounter] = useState(0)
  return (
    <>
        <h1>{counter}</h1>
        <button onClick={()=>{setCounter(counter+1)}}>inc</button>
        <button onClick={()=>{setCounter(counter<=1?counter*0:counter-1 )}}>dec</button>
        <button onClick={()=>{setCounter(counter*0)}}>reset</button>
    </>
  )
}

export default ClickHandler