import React, { useContext, useEffect, useState } from 'react'
import Img from '../../../../../Components/Assets/home.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImSpinner9 } from "react-icons/im";
import { AuthContext } from '../../../../../Context/AuthContext';
import { http, path } from '../../../../../lib/http/axios';
import { BiUpload } from 'react-icons/bi';
export default function personal() {
  const {userinfo , setGMsg} =useContext(AuthContext)
  const [file ,setFile] =useState(null)
  const [loader ,setLoader] =useState(false)
  const [viewfile ,setViewFile] =useState()
  const [update ,setUpdate] =useState({

    firstname: "",
    lastname:"",
    phone:"",
   

  })
  const Selimage = ()=>{
    document.querySelector('.file').click()
  }

  const UpdatePrimary = async()=>{
    setLoader(true)
    const update_data= {
      firstname: update.firstname? update.firstname: userinfo.firstname,
      lastname:update.lastname? update.lastname: userinfo.lastname,
      phone: update.phone? update.phone: userinfo.phone,
    }

const formdata = new FormData()
formdata.append('firstname' ,  update.firstname? update.firstname: userinfo.firstname)
formdata.append('lastname' , update.lastname? update.lastname: userinfo.lastname)
formdata.append('phone' , update.phone? update.phone: userinfo.phone)
formdata.append('avatar' , file)

await http.put('update-primary' , formdata)
.then(res=>{
  setLoader(false)
  if(res.data.code ==200){
    setGMsg(res.data.msg)
    console.log(res.data)
    
  }else{
    setGMsg(res.data.msg)
   
  }
})
.catch(err=>{
setGMsg(err.message)
})
  }

  if(file){
    const reader= new FileReader()
    reader.readAsDataURL(file);
    reader.onload = (e)=>{
      setViewFile(e.target.result)
    }
  }
  return (
    <div className='flex items-start justify-around'>

 <div className='w-[30%]  text-center flex items-center justify-start flex-col'>
    <div onClick={Selimage}  className="img-cont cursor-pointer relative w-[120px] h-[120px] border-3 border-sky-500 mt-4 overflow-hidden rounded-full">
      <LazyLoadImage
      src={ viewfile?viewfile:userinfo.avatar? path+userinfo.avatar:""}
      effect='blur'
width="100%"
height="100%"
      className='w-full bg-cover h-full'
      />
      <BiUpload className='selphoto top-2/4 left-2/4    backdrop-blur-sm -translate-x-2/4 -translate-y-2/4  text-3xl font-bold  absolute text-slate-700'/>
    </div>
    <b className="text-slate-500 text-xl mt-3">{userinfo.firstname&&userinfo.firstname} {userinfo.lastname&&userinfo.lastname}</b>
    <span className="text-slate-400 text-xs px-4">
      A complete web developer and desinger based on next genereation system
    </span>
<input type="file" className='file' hidden onChange={(e)=>{setFile(e.target.files[0])}} accept='image/*'/>
  
 </div>
<div className='w-[60%] grid gap-2 mt-4 grid-cols-2'>
<div className='flex flex-col col-span-1 bg-white p-2 rounded shadow-lg'>
<label className='ml-2 text-slate-500' htmlFor="">First Name</label>
<input onChange={(e)=>{setUpdate({...update , firstname: e.target.value})}}  type="text" defaultValue={userinfo.firstname&&userinfo.firstname} className='px-2 border-none outline-none bg-none py-1' placeholder='Type to edit FirstName' />
</div>

<div className='flex flex-col bg-white p-2 rounded shadow-lg'>
<label className='ml-2 text-slate-500' htmlFor="">Last Name</label>
<input onChange={(e)=>{setUpdate({...update , lastname: e.target.value})}} type="text" defaultValue={userinfo.lastname&&userinfo.lastname} className='px-2 border-none outline-none bg-none py-1' placeholder='Type to edit LastName' />
</div>


<div className='flex flex-col bg-white p-2 rounded shadow-lg'>
<label className='ml-2 text-slate-500' htmlFor="">Email Name</label>
<input  type="email"  disabled value={userinfo.email&&userinfo.email} required  className='px-2 border-none text-gray-500 cursor-not-allowed outline-none bg-none py-1' placeholder='Type to edit Email' />
</div>


<div className='flex flex-col bg-white p-2 rounded shadow-lg'>
<label className='ml-2 text-slate-500' htmlFor="">Mobile Number</label>
<input onChange={(e)=>{setUpdate({...update , phone: e.target.value})}} type="number" defaultValue={userinfo.phone&&userinfo.phone} required  className='px-2 border-none outline-none bg-none py-1' placeholder='Type to edit MobileNumber' />
</div>


<button onClick={UpdatePrimary} disabled={loader? true : false} className='px-3 py-3 hover:bg-blue-400 rounded-lg bg-blue-500 text-white text-center w-full'>
 {loader?  <ImSpinner9 className='animate-spin w-full text-center'/> :"Save"}
</button>
</div>

    </div>
  )
}
