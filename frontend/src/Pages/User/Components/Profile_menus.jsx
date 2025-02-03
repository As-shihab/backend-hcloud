
import React, { useContext } from 'react'
import { BiAward, BiMoney } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { CiSettings } from 'react-icons/ci'
import { IoSettingsSharp } from 'react-icons/io5'
import { LiaStampSolid } from 'react-icons/lia'
import { PiListMagnifyingGlassDuotone } from 'react-icons/pi'
import { RiListSettingsLine } from 'react-icons/ri'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../../Context/AuthContext'
import { path } from '../../../lib/http/axios'
import { LazyLoadImage } from 'react-lazy-load-image-component'
export default function Profile_menubar() {
  const PathData = 'usePathname()'
  const {userinfo} =useContext(AuthContext)
  
  const NavLinks = [
    { id: 1, name: 'Profile', path: '/user/view/profile', mob_btn: 'fa fa-solid fa-user' },
    { id: 2, name: 'Listing', path: '/user/view/listing', mob_btn: 'fa fa-list' },
    { id: 3, name: 'Pro', path: '/user/view/draft', mob_btn: ' fa-brands fa-square-web-awesome-stroke' },
    { id: 4, name: 'Locals', path: '/', mob_btn: 'fa-solid fa-location-dot' },
    { id: 5, name: 'Trendings', path: '/Pages/Trendings', mob_btn: 'fa fa-solid fa-bolt' },
  ]
 
  return (
    <nav className='profile_menus p-0 h-full relative gap-3'>
<div>
 <a href="/">Logo</a>
</div>

<div className='flex flex-col gap-3'>
<NavLink className="w-full" to="/user/view/profile">
                <div className='w-full profile_nav'>
                <CgProfile className='text-4xl icon w-full px-2'/>
                </div>
                </NavLink> 

                <NavLink to="/user/view/listing">
                <div className='w-full profile_nav'>
                <RiListSettingsLine className='icon text-4xl w-full px-2'/>
                </div>
                </NavLink> 

                <NavLink to="/user/view/payments">
                <div className='w-full profile_nav'>
                <BiMoney className='icon text-4xl w-full px-2'/>
                </div>
                </NavLink> 

                <NavLink to="/user/view/saved">
                <div className='w-full profile_nav'>
                <BiAward className='icon text-4xl w-full px-2'/>
                </div>
                </NavLink> 
</div>




                <div className='absolute flex flex-col items-center gap-3 bottom-3'>

<NavLink className="w-full" to="/user/view/profile">
<div className="image w-[40px] profile_nav  h-[40px]  overflow-hidden rounded-full">
       <LazyLoadImage
src={userinfo.avatar? path+userinfo.avatar:""}
effect='blur'
className='h-full w-full rounded-sm shadow-sm  bg-cover '
height="100%"
width="100%"
       />
    </div>
</NavLink>

                 <NavLink to="/user/view/profile/setting"><IoSettingsSharp className='text-3xl'/></NavLink>
            
                 
                </div>
  
    </nav>
  )
}
