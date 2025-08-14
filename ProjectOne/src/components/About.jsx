import React, { useEffect, useState } from 'react'
import data from './data.js'
import Cart from './Cart.jsx'
function About() {
  const [tours, setTures] = useState(data)


  return (
    <div>

      <div className='w-full text-3xl font-semibold space-x-0.5 text-blue-500  pt-10'>
        <h1>Our Organition provids full support and saftey of people</h1>

        <Cart tours={tours} setTures={setTures} />
      </div>
      <div className='items-center font-bold text-3xl text-violet-500'>
        Contact Us  to make your journey Better
      </div>
    </div>
  )
}

export default About