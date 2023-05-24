import React, { useState } from 'react'

const Message = () => {
    const [Message, setMessage] = useState("hello Visitor");
  return (
    <>
        <h1>{Message}</h1>
        <button onClick={()=>setMessage("thanks for subscribing")}>Subscribe</button>
    </>
  )
}

export default Message