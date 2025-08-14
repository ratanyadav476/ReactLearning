import React from 'react'
import { useNavigate } from 'react-router-dom'
function Contact() {
  const navigate=useNavigate()
  function clickHandler(){
    navigate("/Services")
  }
  function movePrevHandler(){
    navigate("/About")
  }
  return (
  <div className='w-[500px] h-[400px] flex flex-col justify-center items-center bg-blue-800 text-white font-bold p-10 m-8 border border-white rounded-4xl'>
   
    <div className='text-2xl font-bold bg-pink-400 text-black border border-white rounded p-4 m-4'> Have any query please Contact ? </div>
    < h3 className='m-3 p-3 bg-green-300 rounded-2xl'>Contact us for more Information.?</h3>
    <button onClick={clickHandler} className='m-3 p-2 '>Move Services</button>
    <button onClick={movePrevHandler} className='m-2 p-2 '>Move About </button>
 </div>
  )
}

export default Contact