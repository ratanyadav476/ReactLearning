import React from 'react'
import { useNavigate } from 'react-router-dom'
function Card() {
  const navigate = useNavigate()
  function clickHandler() {
    navigate("/About")
  }

  function movePrevHandler(){
    navigate("/")
  }
  return (
    <div className='w-[500px] h-[400px] flex flex-col justify-center items-center bg-blue-800 text-white font-bold p-10 m-8 border border-white rounded-4xl'>

      <div className='text-2xl font-bold bg-pink-400 text-black border border-white rounded p-4 m-4'> this tis your card details </div>
      < h3 className='m-3 p-3 bg-green-300 rounded-2xl'>Your Card info will Provided Soon ?</h3>
      <button onClick={clickHandler} className='m-3 p-2 '>Move About</button>
      <button onClick={movePrevHandler} className='m-2 p-2 '>Move Home</button>
    </div>
  )
}

export default Card