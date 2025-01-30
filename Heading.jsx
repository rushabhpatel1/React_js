import React, { useState } from 'react'

export default function Heading() {
  const [state, setState] = useState(0)
  function Inc(){

    setState(state + 1)
   
    ///

    // setState((prevState)=>prevState+1)
    // setState((prevState)=>prevState+2)
    // setState((prevState)=>prevState+3)
  }
  return (
    <div>
      <h1>Counter is {state}</h1>
      <button onClick={Inc}>Click</button>
    </div>
  )
}
