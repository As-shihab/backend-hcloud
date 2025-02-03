import React, { useContext, useEffect } from 'react'
import Img from '../../../../../Components/Assets/alldone.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { http } from '../../../../../lib/http/axios'
import { ListingContext } from '../../../../../Context/ListingContext'
function Allset() {
  const {listingdata , setProductId , setNext } =useContext(ListingContext)

  useEffect(()=>{
     MakeDraft()
     setNext(false)
  },[])
const MakeDraft= async()=>{
  await http.post("draft-listing" , listingdata)
  .then(res=>{
     setProductId(res.data.id)
     if(res.data.id){
      setTimeout(() => {
        setNext(true)
        localStorage.setItem("productid" , res.data.id)
      }, 1000);
     }
  })
}

  return (
    <div className='ese-anim'>
     <LazyLoadImage
     src={Img}
     effect='blur'
     width="100%"
     height="100%"
     />
     <h1 className='text-6xl fw-bold py-2 animate-bounce text-sky-400'>Congradulations</h1>
     <span>You have done to create new listing</span><br />
     <button className='mt-2 py-2 px-4 rounded-lg animate-pulse text-sky-500 border border-sky-500'>View List</button>
    </div>
  )
}

export default Allset
