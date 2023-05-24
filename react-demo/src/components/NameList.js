import React, { useState, useTransition } from 'react'

const NameList = () => {
    const names = ["ahmed","mohamed","abdullah"]
    const styles = {
        fontSize:"50px",
        color:"orange",
    }
    const [query , setQuery] = useState("")
    const [inputQuery , setInputQuery] = useState("")
    const[isPending , startTrans]=useTransition()
    const changeHandler = (e)=>{
        setInputQuery(e.target.value)
        startTrans(()=>setQuery(e.target.value))
    }
    const filterNames = names.filter((name)=>{
        return name.includes(query)
    })
  return (
      <>
      <input type='text' value={inputQuery} onChange={changeHandler}/>
      {isPending && <div>isPending ....</div>}
    {
        filterNames.map((name)=>{
            return <h3 style={styles} key={name}>{name}</h3>
        })
    }
    </>
  )
}

export default NameList