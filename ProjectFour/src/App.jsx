
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Help from './components/Help'
import Upwaad from './components/Upwaad'
import MainHeader from './components/MainHeader'
import { NavLink } from 'react-router-dom'

function App() {
  

  return (
    <>

    <nav>
      <ul className='w-full flex items-center justify-around gap-8 m-8'>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/About" >About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
        <li><NavLink to="/Help">Help</NavLink></li>
        <li><NavLink to="/Upwaad">Upwaad</NavLink></li>
        {/* <li><NavLink to="/MainHeader">MainHeader</NavLink></li> */}
      </ul>
    </nav>
      <div>
        <Routes>
          <Route   path="/"  element={<MainHeader/>} >
          <Route  index  element={<Home/>} />
          <Route  path="/About"  element={<About/>} />
          <Route  path="/Contact"  element={<Contact/>} />
          <Route  path="/Help"  element={<Help/>} />
          <Route  path="*"  element={<Upwaad/>} />
          </Route>
          
        </Routes>
      </div>
    </>
  )
}

export default App
