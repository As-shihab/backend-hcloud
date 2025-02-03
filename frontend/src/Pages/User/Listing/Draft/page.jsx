import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../../Context/UserContext';
import { http } from '../../../../lib/http/axios';
import { AuthContext } from '../../../../Context/AuthContext';

export default function page() {
const {loader  , listing , ForcUpdate , update} = useContext(UserContext)
const {setGMsg } =useContext(AuthContext)
const [id ,setId] =useState(null)


if(id){
  http.delete(`del-listing/`+id )
  .then(res=>{
    console.log(res.data)
    setGMsg(res.data.msg)
    setId(null)
   ForcUpdate(update=> update+1)
  })
}


  return (
    <div className='overflow-y-scroll max-h-[80vh] shadow-lg p-3 rounded-lg'>



    <table className="w-full ">
   <thead>
   <tr className='text-xl bg-slate-100 py-2 rounded-lg'>
    <th>Index</th>
        <th>Type</th>
        <th>published</th>
        <th>Position</th>
        <th>Created At</th>
        <th>Action</th>
      </tr>
   </thead>
      {Object.values(listing).filter(data=> data.draft==true).map(list=>{
        console.log(list)
  return (
       <tr key={list.id}>
        <th className='font-mono text-slate-600'>{list.id&&list.id}</th>
        <th className='font-mono text-slate-600'>{list.title&&list.title}</th>
        <th className='font-mono text-slate-600'>{list.publish==false? "No" :"Published"}</th>
        <th className='font-mono text-slate-600'>{list.draft==true? "Draft" :"Complete"}</th>
        <th className='font-mono text-slate-600'>{list.created && list.created}</th>
        <th className='font-mono text-slate-600'><button className='m-1 py-1 px-3 rounded-lg border border-slate-800'>Edit</button>
        <button onClick={()=>{setId(list.id)}} className='m-1 py-1 px-3 rounded-lg border border-slate-800'>Delete</button>
        </th>
       </tr>
    )
  })}
      
    </table>


    </div>
  )
}
