import React from 'react'
import { useSelector } from 'react-redux'

function Counter() {
    const count=useSelector((state)=>state.counter.value)
  return (
    <div>

        <button>Increment</button>
        <br />
        <br />
        <div>{count}</div>
        <br />
        <br />
        <button>decrement</button>
    </div>
  )
}

export default Counter