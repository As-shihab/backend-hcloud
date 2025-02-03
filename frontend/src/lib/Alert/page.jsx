import React, { useEffect, useRef, useState } from 'react'

export default function page(props) {
    const [count  , setCount] =useState(0)
    const [loading ,  setLoading] =useState(false)
    const [isrunning , setRunning] = useState(true)

    

    useEffect(()=>{
   
         counter()
         return ()=>clearInterval(id.current)


    }, [])
const id =useRef()
    const counter = ()=>{
      id.current= setInterval(() => {
         setCount((p)=>p+1)



      }, 1000);
    }

    if(count==5){
      clearInterval(id.current)

      setTimeout(() => {
        
        setLoading(true)
        setTimeout(() => {
          props.Alert(false)
        }, 1000);
        setRunning(false)
       
      }, 500);

     
    }


    const Trash = ()=>{
      props.Alert(false)
    }
  return (
    <div className='alert-window top-1/2 left-1/2 p-3 py-3 px-5 bg-white overflow-hidden border absolute  z-20 rounded-2xl shadow-lg text-center'>
    <div className="text-bold text-xl text-black">{props.text}</div>

    <b className="text-7xl text-bold  mb-2 mt-2 w-full text-gray-500 select-none">
        {count}
    </b>
    <div className="flex flex-row items-center border-t mt-2 justify-around">
      <button onClick={Trash} className={`hover:text-red-500 cursor-pointer ${loading ? `text-red-500` : `text-gray-700`}`}>{loading? "Canceling" : "Cancel"}</button> 
      <button onClick={()=>{  props.Progress("ok")}}  className='hover:text-sky-600 cursor-pointer' disabled={props.next=="no" ? true : false}>Progress</button></div>
    </div>
  )
}
