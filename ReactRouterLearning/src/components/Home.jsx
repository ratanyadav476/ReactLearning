import React from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
  function changeHandle(){
    navigate("/*")
    
  }
  function changeHandle(){
    navigate(-1)
  }
  return (
  <>

    <div>this is home component</div>
    <button onClick={changeHandle}>move to all page</button>
    <button onClick={changeHandle}>Go Back</button>
  </>
  )
}

export default Home