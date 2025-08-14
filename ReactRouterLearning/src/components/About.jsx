import React from 'react'
import { useNavigate } from 'react-router-dom'
function About() {
  const navigate=useNavigate();
  function clickHandler(){
    navigate("/")
  }
  return (
   <div>

     <div>this is About component </div>
     <button onClick={clickHandler}>
      move to Home section
     </button>
   </div>
  )
}

export default About