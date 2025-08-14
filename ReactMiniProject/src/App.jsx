import { useState } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const decreseHandler=()=>{
    setCount(count-1)
  }
  const resetHandler=()=>{
    setCount(0)
  }
  const increseHandler=()=>{
    setCount(count+1)
  }


  return (
   <div className='w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10' >
    <div className='text-[#0398d4] font-medium text-4xl'>Increment & Decrement</div>
    <div className='flex bg-white p-4 m-4 justify-center gap-2 rounded-sm'>
      <button onClick={()=>decreseHandler()} className='w-[35px] bg-blue-600 px-10 m-3 font-bold'>-</button>
      <div className='bg-slate-500 w-[60px] p-3 m-3 rounded  font-bold'>{count}</div> 
      <button onClick={()=>increseHandler()} className='w-[35px] bg-blue-600 px-10 m-3'>+</button>
    </div>
    <button onClick={()=>resetHandler()} className='w-[70px] bg-blue-600  font-bold'>reset</button>
   </div>
  )
}

export default App
