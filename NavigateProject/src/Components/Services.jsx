import React from 'react'
import { useNavigate } from 'react-router-dom'
function Services() {
  const navigate=useNavigate()
  const clickHandler=()=>{
    navigate("/Login")
  }
  const clickBackHandler=()=>{
    navigate("/Contact")
  }
  return (
       <div className='w-[500px] h-[400px] flex flex-col justify-center items-center bg-blue-800 text-white font-bold p-10 m-8 border border-white rounded-4xl'>
   
    <div className='text-2xl font-bold bg-pink-400 text-black border border-white rounded p-4 m-4'> which type of service do u want ?  </div>
    < h3 className='m-3 p-3 bg-green-300 rounded-2xl'>How we can help you ??</h3>
    <button onClick={clickHandler} className='m-3 p-2 '>Move Login</button>
    <button onClick={clickBackHandler} className='m-2 p-2 '>Move Contact </button>
 </div>
  )
}

export default Services