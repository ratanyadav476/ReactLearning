import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
  return (
<div>
    <Outlet/>
        <div> this is your Home</div>
</div>
  )
}

export default Home