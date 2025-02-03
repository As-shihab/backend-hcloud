import React, { useContext, useEffect, useRef, useState } from "react"
import Mob_menu from "../Popup/Menubar"
import { NavLink, useParams } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AuthContext } from "../../Context/AuthContext";
import { path } from "../../lib/http/axios";

function Header() {
const {userinfo} =useContext(AuthContext)
const [menubar, setMenubar]=useState(false);
const menuref = useRef()
const NavLinks =[
  {id:1 , name:'Stays' , path: '/' , mob_btn: 'fa fa-home'},
  {id:2 , name:'Booking' , path: '/booking' , mob_btn:' fa fa-person-walking-luggage'},
  {id:3 , name:'Tikets' , path: '/tikets' , mob_btn: 'fa-solid fa-location-dot'},
  {id:4 , name:'Trendings' , path: '/trendings' , mob_btn: 'fa fa-solid fa-bolt'},
]

useEffect(()=>{
  const handler = (e)=>{
   if(!menuref.current.contains(e.target)){
    setMenubar(false)
   }
   return removeEventListener()
  }

  document.addEventListener('mousedown' , handler)


}, [])

  return (
    <header className='header '>

<div className="mob_search"> <i className="fa fa-search"></i></div>
      <div className="header_left"><h1 className='fw-bold text-primary text-3xl'>H Cloud</h1></div>
      {/* header mid started */}
     
        <div className="header_mid text-center">

            {
              NavLinks.map((links)=>{
                return(
                  <>
                  
               <NavLink key={links.id} to={links.path} className="header_link">{links.name}</NavLink>
                  </>
                )
              })
            }
      </div>
     
  
      {/* header mid end */}

      {/* Header right */}
      <div className="header_right d-flex align-items-center">

        <div className='right_header_users_info'>

          <span>AirRent your Home  | <i className='fa fa-earth m-2'></i></span>

        </div>

        <div className="header_users_login items-center flex cursor-pointer" >
          <i className="fa fa-grip" onClick={()=>{setMenubar(!menubar)}}></i>
          <div className="header_user_img bg-center rounded-full  overflow-hidden bg-cover w-10 h-10" onClick={ ()=>setMenubar(!menubar)}>
         
          {/* user prfile picture */}
          
      {
        userinfo.avatar? 
        <LazyLoadImage
        src={path+userinfo.avatar}
        effect="blur"
        height="100%"
        width="100%"
        className="h-full w-full"
        />
        :
        <i className="fa-solid fa-circle-user  bg-secondary p-2"></i> 
      }
         
           
          </div>


<div className={menubar ? " active  cursor-auto" : "menu_bar z-50 cursor auto"} ref={menuref}>

<Mob_menu/>

</div>

     </div>

{/* navber */}

    


  


        </div>

 
  {/* end header right */}






<div className="mob_btn p-3">

<div className="btns flex justify-between align-middle">
  {
    NavLinks.map(btns=>{
      return(
        "hello"
   
//       <Link key={btns.id} className={PathData== btns.path ? "Active" :null} href={btns.path}>
// <i className={btns.mob_btn}></i>
// <span className="text-sm">{btns.name.slice(0 , 7)}</span>
//       </Link>
      )
    })
  }

</div>
</div>


    </header>
  )
}

export default Header