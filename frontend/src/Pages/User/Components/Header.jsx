
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Img from '../../../Components/Assets/home.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { path } from '../../../lib/http/axios'
import { AuthContext } from '../../../Context/AuthContext'
import { BiNotification } from 'react-icons/bi'
import { CgNotifications } from 'react-icons/cg'
function Header() {
    const {userinfo} =useContext(AuthContext)
    const back = useNavigate()
 
    const NavLinks =[
        {id:1 , name:'Listing' , path: '/Pages/User/Listing' , mob_btn: 'fa fa-home'},
        {id:2 , name:'Booking' , path: '/' , mob_btn:' fa fa-person-walking-luggage'},
        {id:3 , name:'Locals' , path: '/Pages/Locals' , mob_btn: 'fa-solid fa-location-dot'},
        {id:4 , name:'Trendings' , path: '/Pages/Trendings' , mob_btn: 'fa fa-solid fa-bolt'},
      ]
  return (
 <header className='user-header border-b shadow-sm flex rounded-lg items-center  justify-around'>
<Link className='no-underline w-[20%]'><h4><button className="px-3 py-1 rounded-lg border" onClick={()=>{back(-1)}}><i className="fa fa-arrow-left py-1  px-1">  </i></button></h4></Link>
<div className="search flex items-center border rounded-lg  overflow-hidden w-[40%]">
  <i className="fa fa-search text-slate-500 mx-2"></i>  <input type="search" className=' px-2 py-2 w-full border-none outline-none' placeholder='Type to find services' />
</div>
 <nav className='flex justify-around items-center'>


{
     
    }

{/* navlinks */}


 </nav>
<div className='flex justify-center w-[20%] items-center'><button className='mr-3'>Swich visitor</button> <div className='profile_img'>
    {/* <Image
    src=
    alt='user photo'
   layout='fill'
    /> */}


<div className="user_profile shadow-sm  px-2 py-1 rounded-lg cursor-pointer flex items-center justify-center">
<BiNotification/>
    <div className="image w-[40px] h-[40px] border-2 border-green-400 overflow-hidden rounded-full">
       <LazyLoadImage
src={userinfo.avatar? path+userinfo.avatar: Img}
effect='blur'
className='h-full w-full bg-cover '
height="100%"
width="100%"
       />
    </div>
</div>

    </div> </div>
 </header>
  )
}

export default Header
