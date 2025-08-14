import React from "react"
import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Lab from "./components/Lab"
import Contact from "./components/Contact"
import All from "./components/All"
import { NavLink } from "react-router-dom"
import MainHeader from "./components/MainHeader"

function App() {


  return (

    <>

      {/* <nav>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Lab">Lab</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
    <li><Link to="*">All</Link></li>
  </ul>

</nav> */}

      <nav>

        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/About">About</NavLink></li>
          <li><NavLink to="/Lab">Lab</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
          <li><NavLink to="*">All</NavLink></li>
        </ul>

      </nav>
      <Routes>

        <Route path="/" element={<MainHeader />} >
        <Route  index element={<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Lab" element={<Lab />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<All />} />
        </Route>
  
    </Routes >
    </>
  )
}

export default App
