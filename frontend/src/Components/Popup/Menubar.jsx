
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { BiLock } from 'react-icons/bi';
function Mob_menu() {
  const {isuser ,userinfo, verify ,setVerify} = useContext(AuthContext)
const [isdark , setDark]=useState(false)

const SignOut = () =>{
  localStorage.removeItem('user-token');
  location.reload()

}
  return (
    
    <div className='data d-menubar'>

{
  !isuser?
  <div className="auth">
<Link className='text-sky-500' to="/auth/login">Login</Link>
<span>|</span>
 <Link className='text-sky-500' to="/auth/signup">SignUp</Link>
</div>


:   <div className="auth">
 <i onClick={SignOut} className="fa cursor-pointer rotate-180 fa-sign-out"></i>
 {
  verify ?
  <button onClick={()=>{setVerify(true)}} className='text-red-500 flex gap-1 font-bold '><BiLock className='text-red-500'/> Verify</button>
  : userinfo&& userinfo.active? 
  <Link to="/user/view/profile ">Profile</Link>
  :<button onClick={()=>{setVerify(true)}} className='text-red-500 flex gap-1 font-bold '><BiLock className='text-red-500'/> Verify</button>
 }
</div>

}
{/* should be after auth */}

{/* {
  active() ? <a target='_blank' className='navlink' href="/user/view/listing">View listiing</a> : null
} */}

{/* end auth  */}
<a className='navlink' href="/Pages/Auth/Login">Terms & Conditions</a>
 <li className='navlink flex justify-between items-center' href="/Pages/Auth/SignUp"> <span>Dark Mode</span> <span onClick={()=>{setDark(!isdark); localStorage.setItem('dark' ,isdark)}} className={`w-[50px] flex ${isdark? `justify-end` : `justify-start`} mode rounded-full p-1 bg-slate-700 relative mode `}> <div className='w-[20px] h-[20px] bg-sky-500  rounded-full  mode '></div></span></li>

 <a className='navlink' href="/Pages/Auth/Login">Visit help center</a>
 <a className='navlink' href="/about">About</a>

    </div>
  )
}

export default Mob_menu