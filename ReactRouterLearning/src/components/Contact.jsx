import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigate=useNavigate();
  function moveHandler(){
    navigate("/Lab")
  }
  return (
 <div>
     <div>Contact</div>
     <button onClick={moveHandler}>move to Lab</button>
 </div>
  )
}

export default Contact