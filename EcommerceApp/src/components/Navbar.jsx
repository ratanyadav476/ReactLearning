import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const {cart}=useSelector((state)=>state)
  return (
    <div>
        <nav className='flex flex-row justify-between h-20 max-w-6xl  mx-auto  '>
          <NavLink to="/">
            <div className='ml-5'>
                <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/06/shopping-online.jpg" width={100} height={20} alt="" />
            </div>
          </NavLink>
            <div className=' flex items-center font-medium text-slate-100 mr-5 space-x-6'>
               <NavLink to="/">
                 <p className='text-gray-700 '>Home</p>
               </NavLink>

               <NavLink to="/cart">

               <div className='relative'>
                 <FaShoppingCart className='text-2xl text-gray-700' />
                {
                  cart.length>0 &&  <span className='absolute -top-5 -right-1 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full text-white'>{cart.length}</span>
                }
                 </div>
               </NavLink>
            </div>

        </nav>
    </div>
  )
}

export default Navbar