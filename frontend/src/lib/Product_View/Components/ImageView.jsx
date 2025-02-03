import React, { useContext, useState } from 'react'
import { Global } from '../../../Context/Global'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { path } from '../../http/axios'

export default function ImageView() {
    const {viewimages} =useContext(Global)
    console.log(viewimages)
    const [viewone ,setViewone] =useState(null)
  return (
    <div className={`relative ${viewone&& `h-[95vh] overflow-hidden`}`}>
        {
            viewimages?
           <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-1'>
             {
                Object.values(viewimages).map(all=>{
                    return (
                        <LazyLoadImage
                        onClick={()=>{setViewone(all)}}
                          src={path+all}
                          effect="opacity"
                          height="100%"
                          width="100%"
                          className='rounded-lg cursor-pointer'
                        />
                    )
                })
             }
            </div>

            : "Loading , not sure! data will not found this page back and come again"
        }

     
      {
        viewone&&
        <div className="absolute flex flex-col justify-center items-center top-2/4 w-full h-full backdrop-blur-lg left-2/4 -translate-x-2/4 -translate-y-2/4">
            <button onClick={()=>{setTimeout(() => {
                setViewone(null)
            }, 100);}} className='border-2 border-orange-500 rounded-lg px-3 py-2 text-orange-500 absolute z-10 top-5  right-5 '>CLose</button>
           <div className="lg:w-4/5 w-full p-1 ">
           <LazyLoadImage
           className='rounded-lg '
           effect='blur'
        src={path+viewone}
        />
           </div>
      
     </div>
      }
  
       
    </div>
  )
}
