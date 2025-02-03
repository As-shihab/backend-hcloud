import React from 'react'
import Img from '../../../../Components/Assets/home.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaLocationArrow } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

export default function page() {
  return (
    <div className='flex gap-1 h-[90vh] justify-between  items-center '>

        <div className="bg-white shadow-sm rounded-lg p-2 h-[90vh] overflow-y-scroll w-[25%]">

 <div className='text-center w-full bg-blue-500  text-white rounded  py-2'><i className="fa text-white fa-message"></i> Message</div>
 <div className='text-center border px-2 w-full flex items-center    rounded  py-2'><i className="fa mx-2 text-slate-500 fa-search"></i> <input type="search" className='border-none w-full outline-none' placeholder='Type to find' /></div>

{/* use5rs */}
<div className='mt-4 flex flex-col gap-2 '>
<div className="flex justify-around border-b pb-2 cursor-pointer items-center">

<div className="flex items-center">
    <div className="img-cont w-[50px] h-[50px] overflow-hidden rounded-full">
        <LazyLoadImage
        src={Img}
        effect='blur'
        height="100%"
        width="100%"
        className='h-full w-full bg-cover'
        />
        </div>
    <div className='flex line-h-2 ml-2 flex-col'>
        <b className='text-slate-600 text-lg'>Hello world</b>
        <span className='text-xs mb-2 text-slate-400'>Web developer</span>
    </div>
    

</div>
<b className='text-green-400'>online</b>
</div>

<div className="flex justify-around border-b pb-2 cursor-pointer items-center">

<div className="flex items-center">
    <div className="img-cont w-[50px] h-[50px] overflow-hidden rounded-full">
        <LazyLoadImage
        src={Img}
        effect='blur'
        height="100%"
        width="100%"
        className='h-full w-full bg-cover'
        />
        </div>
    <div className='flex line-h-2 ml-2 flex-col'>
        <b className='text-slate-600 text-lg'>Hello world</b>
        <span className='text-xs mb-2 text-slate-400'>Web developer</span>
    </div>
    

</div>
<b className='text-slate-500'>offline</b>
</div>







</div>
        </div>
        {/* messsage bar */}
        <div className="bg-slate-100 h-full text-center rounded relative  overflow-hidden w-[50%]">
            <div className="absolute top-0">
                hello
            </div>
            <div className="absolute w-full  border  rounded   bottom-0">
              <div className="flex itmes-center bg-white w-full py-3 px-4 shadow-lg rounded-lg justify-between">
                <input type="text" style={{height:"80%"}} className='w-full h-full border-none outline-none' placeholder='Type to sent message' />
                <div className='flex justify-center  w-[20%]  items-center'>
                <FaCirclePlus className='text-slate-600 cursor-pointer hover:text-slate-700 text-2xl mx-3  rounded-sm' />
                <FaLocationArrow  className='text-sky-500 text-2xl mx-1  cursor-pointer hover:text-sky-600 rounded-sm'/>
                </div>
              </div>
            </div>
        </div>

        {/* priduct based on conversation */}
        <div className="bg-white h-full text-center flex justify-center  items-start rounded p-2 w-[25%]">

<div className="right-content flex flex-col justify-center items-center">
<div className="img-cont w-[80px] h-[80px] border-3 border-sky-500 overflow-hidden rounded-full">
              <LazyLoadImage
              src={Img}
              effect='blur'
              width="100%"
              height="100%"
              className='bg-cover h-full w-full'
              />
            </div>
            <b className="text-slate-600 mt-1">
                Abdus salam shihab
            </b>
            <span className="text-xs text-slate-400 px-3 mt-1">
                a complete web developer and desinger based on next genereation app
            </span>


            <b className="text-slate-500 mt-3  w-full">
                Location in dhaka bangladesh 
                <br />
                <span className='text-xs'>
                    best beach hote in dahaka 
                </span>
            </b>

            <div className="photos mt-1 w-full">
            <b>Photos</b>
            <div className="grid grid-cols-2 gap-2 mt-3 ">
               
               <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                  <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />

<LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />

<LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                  <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />

<LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                  <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                  <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                  <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />
                    <LazyLoadImage
               src={Img}
               effect='blur'
               width="100%"
               height="100%"
            className='rounded-lg'
               />

            </div>
            </div>

</div>
          
        </div>
    </div>
  )
}
