import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { http } from '../../../lib/http/axios'
import { AuthContext } from '../../../Context/AuthContext'

export default function page() {
  const [loader ,setLoader] =useState(false)

  const [msg , setMsg] =useState('')
  const [user ,setUser] =useState({
    firstname:'',
    email:'',
    password:''
  })
  const {setGMsg} =useContext(AuthContext)
  const hcloud = async ()=>{
    setLoader(true)
   await http.post('new-user' , user)
   .then(res=>{
    console.log(res.data)
    setMsg(res.data.msg)
    setLoader(false)
    if(res.data.code == 200){
      localStorage.setItem('user-token' , res.data.token )
      setGMsg("Pleas wait a moment")
      location.reload()
    }
    else{
      setGMsg("User cannot created")
    }
   })
   .catch(err=>{
     setMsg(err.message)
   })
  }
  return (
    <div className='grid h-screen grid-cols-2'>

       <div className='auth-color relative h-full'>
   <div className="absolute top-2/4 left-[50%] -translate-y-2/4 -translate-x-2/4 text-white ">
   <h1 className='text-4xl lg:text-6xl font-bold '>Book House and find your next stays</h1>
   <span className='text-2xl'>Get started from here</span><br />
   <span className='my-2 '>already have account ? <button className='text-sky-300 border-b border-sky-600'><Link to="/auth/login">Login</Link></button></span>
   </div>
       </div>
       <div className='relative w-full h-full'>
        <div className='auth-color-2 z-0'></div>
        <div className='auth-color-3 z-0'></div>
        <div className='auth-color-4 z-0'></div>


<div className="signup text-center lg:w-9/12 w-[90%]  absolute backdrop-blur-lg z-10 top-2/4 left-2/4 -translate-y-2/4 border border-slate-300 rounded-lg shadow-sm p-5 -translate-x-2/4">
  <h1 className='font-bold text-5xl text-sky-500 '>H-Cloud</h1>
  <span className='text-xl font-semibold text-gray-600'>Get started</span>
<br />

<div className='w-full flex flex-col text-left '>
  <label htmlFor="" className=' ml-1'>FirstName</label>
  <input type="text" placeholder='Type to firstname' onChange={(e)=>{setUser({...user , firstname: e.target.value})}}  className="py-2 bg-transparent  lg:py-3 px-3 rounded-lg border-2 border-teal-500"/>

</div>

<div className='w-full mt-2 flex flex-col text-left '>
  <label htmlFor="email" className=' ml-1'>Email</label>
  <input type="email" placeholder='Type to email' onChange={(e)=>{setUser({...user , email: e.target.value})}} className="py-2 bg-transparent  lg:py-3 px-3 rounded-lg border-2 border-teal-500"/>

</div>


<div className='w-full mt-2 flex flex-col text-left '>
  <label htmlFor="password" className=' ml-1'>Password</label>
  <input type="password" placeholder='Type to password (min 6)' onChange={(e)=>{setUser({...user , password: e.target.value})}}  className="py-2 bg-transparent  lg:py-3 px-3 rounded-lg border-2 border-teal-500"/>

</div>

<div className="mt-3 w-full flex justify-between items-center">
  <span>{msg&&msg}</span>
  <button onClick={hcloud} className='top-1 right-4 py-2 px-3 rounded-lg shadow-sm bg-blue-400 text-white'>{loader? "Wait..." :"SignUp"}</button>
</div>
</div>
       </div>
    </div>
  )
}
