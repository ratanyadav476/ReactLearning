import React from 'react'
import { data } from 'react-router-dom'

function CartItems( props) {
    const data=props.data;
  return (
    <div className=' grid  grid-cols-3  p-4 m-4 ' >
        {
            data.map((item)=>(
                <div key={item.id} className='w-[350px] h-[600px] bg-gray-700 m-8 p-5 rounded-4xl shadow-xl/15' >
                    <img src={item.image} alt="" className='w-full h-[370px]  rounded-2xl ' />
                    <p className='text-[15px] font-semibold text-green-500 p-4 items-center'>{item.info.split(" ").slice(0,30).join(" ") + "..."}</p>
                   <div className='flex items-center justify-between text-xl text-white'>
                     <h3 className='bg-slate-500 px-4 py-2 rounded-xl hover:bg-slate-700 transition duration-300 ease-in '>{item.name}</h3>
                    <h3 className='bg-slate-500 px-4 py-2 rounded-xl  hover:bg-slate-700 transition duration-300 ease-in  '>{item.price}</h3>
                   </div>
                   <button className='bg-pink-600 text-white rounded-xl cursor-pointer text-[24px] font-semibold px-2 py-3 m-2 hover:bg-gray-600 transition duration-700 ease-in-out'>
                    Book Now
                   </button>

                </div>
            ))
                     
        }
    </div>
  )
}

export default CartItems