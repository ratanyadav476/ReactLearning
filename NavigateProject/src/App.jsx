import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css'
import { NavLink } from "react-router-dom"
import Home from './Components/Home'
import Card from './Components/Card'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Login from './Components/Login'
import Error from './Components/Error'
import MainHeader from './Components/MainHeader'
function App() {

  return (
    <>


      <nav className='flex  justify-center bg-white-400 w-[full] h-[150px]'>
        <ul className='flex justify-center item-center m-6 p-3 gap-6'>
          <li> <NavLink to="/"><div>Home</div></NavLink></li>
          <li> <NavLink to="/Card"><div>Card</div></NavLink></li>
          <li> <NavLink to="/About"><div>About</div></NavLink></li>
          <li> <NavLink to="/Contact"><div>Contact</div></NavLink></li>
          <li> <NavLink to="/Services"><div>Services</div></NavLink></li>
          <li> <NavLink to="/Login"><div>Login</div></NavLink></li>
          <li> <NavLink to="*"><div>Not found</div></NavLink></li>

        </ul>
      </nav>
      <Routes>

        <Route path='/' element={<MainHeader />} >
        <Route index  element={<Home/>}/>
          <Route path='/Card' element={<Card />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Login' element={<Login />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
