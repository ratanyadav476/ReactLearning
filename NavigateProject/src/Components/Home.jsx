import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate=useNavigate()
  function clickHandler(){
    navigate("/Card")
  }
  function clickBackHandler(){
    navigate("/Error")
  }
  return (
 <div className='w-[500px] h-[400px] flex flex-col justify-center items-center bg-blue-800 text-white font-bold p-10 m-8 border border-white rounded-4xl'>
   
    <div className='text-2xl font-bold bg-pink-400 text-black border border-white rounded p-4 m-4'> is this Home section </div>
    < h3 className='m-3 p-3 bg-green-300 rounded-2xl'>How are You Bro ?</h3>
    <button  onClick={clickHandler} className='m-3 p-2 '>move Card</button>
    <button onClick={clickBackHandler} className='m-2 p-2 '>move Not Found </button>
 </div>
  )
}

export default Home