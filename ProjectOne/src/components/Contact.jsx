import React from 'react'
import { PiFlowerLotusBold } from "react-icons/pi";
function Contact() {
  return (
  
    <div className=' w-[500px] rounded-3xl shadow-xl/15 text-gray-500 font-semibold text-[20px] mx-auto mt-11 flex items-center flex-col h-[600px] bg-slate-700'>
           
            <div className='w-[100px] h-[100px]'>
            <PiFlowerLotusBold className='w-full h-full pt-4 text-pink-600' />
            </div>
      <div className='flex items-center justify-between gap-4 p-5 m-5'>
        <label htmlFor="fullName" className='pr-3 font-semibold text-[16px] text-white'>
          FullName
        </label>
        <input type="text"
          className=' outline rounded-xl p-2'
          placeholder='enter your fullname' />
      </div>
      <div className='flex items-center justify-between gap-4 p-5 m-5'>
        <label htmlFor="email " className='text-[16px] text-white'>
          Email address
        </label>
        <input type="email"
          className=' outline rounded-xl p-2'
          placeholder='enter your email' />
      </div>
      <div className='flex items-center justify-between gap-4 p-5 m-5'>
        <label htmlFor="password" className='pr-5 text-[16px] text-white'>
          Password
        </label>
        <input type="password"
          className=' outline rounded-xl p-2'
          placeholder='enter your Password' />
      </div>
      <div className='flex items-center justify-between gap-4 p-5 m-5'>
        <label htmlFor="confirm Password" className='text-[16px] text-white'>
          confirm Password
        </label>
        <input type="password"
          className=' outline rounded-xl p-2 bg-slate-700'
          placeholder='enter your password' />
      </div>
      <div className='flex items-center justify-between gap-4 p-5 m-5'>
        <button className='bg-rose-600 text-white px-7 py-2 rounded-2xl '>Submit</button>
      </div>


    </div>
  )
}

export default Contact