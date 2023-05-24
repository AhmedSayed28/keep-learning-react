import React from 'react'

const Child = (props) => {
  return (
    <div>
        <button onClick={props.greetParent}>greetParent</button>
    </div>
  )
}

export default Child