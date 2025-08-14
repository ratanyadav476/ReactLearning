import React from 'react'
import { Outlet } from 'react-router-dom'
function MainHeader() {
    return (
  <>
  
<Outlet/>
    <div>this is home component</div>
  </>
  )
}

export default MainHeader