import React from 'react'
import { useNavigate } from 'react-router-dom'


function Login() {
  const navigate=useNavigate()
  const clickHandler=()=>{
    navigate("/Error")
  }
  const moveBackHandler=()=>{
    navigate("/Card")
  }
  return (
    <div className='w-[500px] h-[400px] flex flex-col justify-center items-center bg-blue-800 text-white font-bold p-10 m-8 border border-white rounded-4xl'>
   
    <div className='text-2xl font-bold bg-pink-400 text-black border border-white rounded p-4 m-4'> is this Login  section </div>
    < h3 className='m-3 p-3 bg-green-300 rounded-2xl'> If need Help Please Login  ?</h3>
    <button onClick={moveBackHandler} className='m-2 p-2 '>move Not Found </button>
    <button onClick={clickHandler} className='m-3 p-2 '>move Card</button>
    
 </div>
  )
}

export default Login