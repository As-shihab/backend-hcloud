import React, { useContext, useState } from 'react'
import Img from '../../../Components/Assets/home.jpg'
import { FaSlideshare } from "react-icons/fa";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';
import { path } from '../../../lib/http/axios';

export default function () {
  const {userinfo} = useContext(AuthContext)
  return (
    <div className='relative h-full'>

    

    <header className='flex justify-around items-center'>
     <Link to="deshbord">
     <div className="deshbord flex items-center cursor-pointer text-xl">
      <FaSlideshare className='text-orange-500 ' /><span className='text-orange-400 ml-2'>Deshbord</span>
      </div>
     </Link> 

      <div className="profile-image w-[120px] h-[120px] rounded-full overflow-hidden border-sky-500 border-5 shadow-lg">
        <LazyLoadImage
        src={userinfo.avatar? path+userinfo.avatar: Img}
        effect='blur'
        width="100%"
        height="100%"
        className='h-full w-full'
        />
      </div>

    <Link to="message">  <div className="deshbord flex items-center cursor-pointer text-xl">
     <i className="fa fa-message text-green-500"></i><span className='text-green-400 ml-2'>Message</span>
      </div>
      </Link>
    </header>


    <div className="profile-bo text-center  mt-5">


<h1 className="text-5xl fw-bold">{userinfo.firstname&&userinfo.firstname} {userinfo.lastname&&userinfo.lastname} </h1>
<span className="text-slate-500">Dhaka Bangladesh</span>


<div className="mt-[5%] relative">
  
  <div style={{margin:"0px auto"}} className="text-2xl w-[55%] text-slate-500 ">New host in housecloud - web spacialist in a marn stack company also a super developer

    <br />
   <br />
   <b className="fw-bold text-4xl"><i className="fa fa-star"></i>
   4.5 - [Pro]
   </b>
    <div className="grid grid-cols-4 mt-9  gap-2">
      <div className="card border-none flex flex-cols">
        <b className="text-3xl">433</b>
        <span className='text-sm'>Listing</span>
      </div>
      <div className="card border-none flex flex-cols">
        <b className="text-3xl">$333</b>
        <span className='text-sm'>Earning</span>
      </div>
      <div className="card border-none flex flex-cols">
        <b className="text-3xl">433</b>
        <span className='text-sm'>Followers</span>
      </div>
      <div className="card border-none flex flex-cols">
        <b className="text-3xl">433</b>
        <span className='text-sm'>Guyst</span>
      </div>

    </div>

    <div className="mt-5 ">
  <Link to="/user/view/profile/edit/primary">
  <button className="border-2 text-[15px] px-3 hover:bg-blue-500 rounded-lg bg-blue-600 text-white" >Edit profile</button>
  </Link> 
  
  <Link to="/user/view/profile/setting">
  <button className="border-2 text-[15px] px-3 hover:bg-slate-500  rounded-lg bg-slate-600 text-white" ><i className="fa fa-cog"></i> Settings</button>
  </Link>  
    </div>
  </div>

</div>


    </div>



    </div>
  )
}

