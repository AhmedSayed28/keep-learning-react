import React from 'react'
import Child from './Child'

const Parent = () => {
    const greetParent = () => {
        const con = true
        con && console.log("Hello i am the parent ")
    }
  return <Child greetParent={greetParent}/>
}
 
export default Parent