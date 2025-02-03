
import React, { useContext, useEffect, useState, } from 'react'
import { LiaFirstdraft } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";
import { FaRunning } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
function page() {
  const [listing, setListing] = useState("")
  const [loading, setLoading] = useState(true)
  const [alert, setAlart] = useState(false)
  const [isok, setProgess] = useState("")
  const [id, setID] = useState()

  const {userinfo} =useContext(AuthContext)
  // getting all listing

  return (
    <div className='relative'>



      <div className='flex justify-around items-center mt-6 '><div className='flex items-center border rounded-lg shadow-sm py-2 px-2'><i className="fa fa-search px-2 text-slate-500"></i> <input type="search" className='border-none outline-none w-full h-full ' placeholder='Type to filter'/></div>      
      <div className="flex items-center">
        <select className='border px-3  rounded-lg py-2' name="" id="">
<option value="30">Find last 30 days</option>
<option value="30">Find last 7 days</option>
<option value="30">Find last 3 days</option>
<option value="30">All</option>
        </select>
        <select className='border px-3  rounded-lg py-2' name="" id="">
<option value="30">Online</option>
<option value="30">Online</option>

        </select>
      </div>
<div className="px-2 gap-2 listing-nav flex items-center cursor-pointer">
<NavLink to="/user/view/listing/*">
<div className="flex items-center gap-1 px-2 py-1 rounded shadow-sm  hover:border">
<FaRunning className='text-2xl  listing-online'/>
<b className="text-slate-500 ">Online</b>
</div>
</NavLink>
<NavLink to={`/user/view/listing/draft/${Math.random(userinfo.id)*100000}`}>
<div className="flex items-center gap-1 px-2 py-1 rounded shadow-sm  hover:border">
<LiaFirstdraft  className='text-2xl  listing-draft'/>
<b className="text-slate-500  ">Draft</b>
</div>
  </NavLink>
<NavLink to="/user/view/createlisting">
<div className="flex items-center gap-1 px-2 py-1 rounded shadow-sm  hover:border">
<CiSquarePlus  className='text-2xl text-blue-500'/>
<b className="text-slate-500 ">Create</b>
</div>
</NavLink>
</div>
         </div>

    <div className='h-[80vh]'>
      
      <Outlet/>
     
    </div>
    </div>
  )
}

export default page
