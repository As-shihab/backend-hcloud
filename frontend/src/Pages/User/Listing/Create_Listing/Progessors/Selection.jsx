import React, { useContext, useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { http, path } from '../../../../../lib/http/axios'
import { AuthContext } from '../../../../../Context/AuthContext'
import { ListingContext } from '../../../../../Context/ListingContext'

export default function Selection() {
const [categorys ,setCategory] =useState('')
const {setGMsg} =useContext(AuthContext)
const [loader ,setLoader] =useState(true)
const [id , setId] =useState(0) 
const {setNext , listingdata ,setListingData} = useContext(ListingContext)
const [type ,setType] =useState(null)

// if title

// if(type){
//   setListingData({...listingdata , title: type})
// }

if(type){
  setNext(true)
}else{setNext(false)}
  useEffect(()=>{
GetCategory()
  },[])
  const GetCategory = async()=>{
    await http.get('get-categorys')
    .then(res=>{
      setCategory(res.data.category)
      setLoader(false)
    })
    

  }
  return (
    <div className=''>
      <b className="text-5xl lg:text-6xl xl:text-9xl py-4 my-5 font-extrabold text-slate-800">
        What are you going to list?
      </b>

<div className="grid grid-cols-2 gap-2  mt-5 lg:grid-cols-3">

{
  !loader?
  Object.values(categorys).map(cat=>{
    return(
      <div onClick={()=>{setId(cat.id); setGMsg(cat.title);setType(cat.title); setListingData({...listingdata , title: cat.title}) }} className={`card cursor-pointer  rounded-lg shadow-sm overflow-hidden ${loader&& `bg-gray-50 animate-pulse`}`}>
      <div className={`h-[270px] ${cat.id==id&& `border-4 ese-anim border-green-400`} cursor-pointer bg-cover overflow-hidden rounded-[40px] ${loader? `bg-gray-100 animate-pulse border-b border-slate-300` : null} `}>
       {
         cat.image&&
         <LazyLoadImage
            src={path+cat.image}
            height="100%"
            width="100%"
            effect='blur'
            className='bg-cover h-full w-full'
         />
       }
  
      </div>
      <b className={` px-4 py-2 ${cat.id==id&& `font-bold text-green-400 `} py-3 text-center  text-xl`}>{loader?"Loading...":cat.title&&cat.title}</b>
    </div>
    )
  })

  :  <div className={`card rounded-lg shadow-sm overflow-hidden ${loader&& `bg-gray-50 animate-pulse`}`}>
  <div className={`h-[270px] rounded-br-[40px] rounded-bl-[40px] ${loader? `bg-gray-100 animate-pulse border-b border-slate-300` : null} `}>
  

  </div>
  <b className='py-3 text-center  text-xl'>{loader?"Loading...":"hotel"}</b>
</div>
}



</div>

    </div>
  )
}

