import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
export default function page() {
  return (
    <div>

 <header className='flex edit-profile gap-3 border-b px-3 py-2 items-center'>

  <NavLink to="primary">Primary <i className="fa fa-arrow-right"></i></NavLink>

  <NavLink to="intermideate">Intermediate <i className="fa fa-arrow-right"></i></NavLink>

  <NavLink to="behost">Become Host </NavLink>


 

 </header>

<div className='px-2'>
<Outlet/>
</div>
    </div>
  )
}
