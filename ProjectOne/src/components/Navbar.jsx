import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Services from './Services'
import All from './All'
function Navbar() {
  return (
    <div>
        <nav className=' text-xl w-full mx-auto flex items-center justify-between  '>
            <ul>
                <div className='bg-gray-700 p-4 rounded-3xl animate-bounce transition duration-300'>
                    <NavLink className="text-violet-500 text-xl font-semibold font-serif " to={"/"}>RtnToors&Trvls </NavLink>
                </div>
            </ul>
            <ul className=' text-blue-600 flex justify-between items-center gap-20 p-5 m-1'>
            <li><NavLink to={"/"} >Home</NavLink></li>
            <li><NavLink to={"/About"}>About</NavLink></li>
            <li><NavLink to={"/Services"}>Services</NavLink></li>
            <li><NavLink to={"/Contact"}>Contact</NavLink></li>
            {/* <li><NavLink to={"*"}>All</NavLink></li> */}
            </ul>
        </nav>
        <Routes>
            
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services/>}/>
        <Route path='*' element={<All/>}/>
        </Routes>
    </div>
  )
}

export default Navbar