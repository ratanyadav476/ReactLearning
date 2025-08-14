import React from 'react'
import { useNavigate } from 'react-router-dom'


function Lab() {
 const navigate=useNavigate();
 function navChngHandler(){
  navigate("/")
 }
  return (
    <div>
      <div> your Lab is there  </div>
      <button onChange={navChngHandler}>move to contact</button>
    </div>
  )
}

export default Lab