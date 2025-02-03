import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Pages/Layout/page'
import Home from './Pages/Home/page'
import Error from './Pages/Error/page'
import Listing from './Pages/User/page'
import ViewList from './Pages/User/Listing/page'
import Profile from './Pages/User/Profile/page'
import Draft from './Pages/User/Listing/Draft/page'
import CreateListing from './Pages/User/Listing/Create_Listing/page'
import Edit_Profile  from './Pages/User/Profile/Edit/page'
import Message from './Pages/User/Profile/Message/page'
import Deshbord from './Pages/User/Profile/Deshbord/page'
import Active_Listing from './Pages/User/Listing/Active/page'
// profile
import Edit from './Pages/User/Profile/Edit/page'
import Setting from './Pages/User/Profile/Setting/page'
import Primary from './Pages/User/Profile/Edit/Progress/Primary'
import Intermideate from './Pages/User/Profile/Edit/Progress/Intermediate'
import BeHost from './Pages/User/Profile/Edit/Progress/BecomeHost'
import ProfileView from './lib/Product_View/Components/ProfileView'
// end

// home routing cmp
import Booking from './Pages/Booking/page'
import Tickets from './Pages/Tickets/page'
import Trendings from './Pages/Trendings/page'
import About from './Pages/About/page'
import ProductView from './lib/Product_View/page'

// auth route 
import Login from './Pages/Auth/Login/page'
import SignUp from  './Pages/Auth/SignUp/page'

// context 
import { AuthContext } from './Context/AuthContext'
import { http } from './lib/http/axios'
import ImageView from './lib/Product_View/Components/ImageView'
import Money from './Pages/User/Money/Money'
import Saved from './Pages/User/Saved/Saved'
import { MdEmail, MdFaceUnlock, MdMailLock } from 'react-icons/md'
import { BiLoader, BiLock, BiLogOut } from 'react-icons/bi'
import { RiDeleteBin2Fill, RiDeleteBin6Fill, RiDeleteBin6Line } from 'react-icons/ri'
import { CgClose } from 'react-icons/cg'

// context state



export default function App() {
  const  [isuser ,setUser] =useState(false)
  const [msg ,setGMsg] =useState('')
  const [userinfo , setUserinfo] =useState('')
 const [visitor ,setVisitor] =useState('')
 const  [verify ,setVerify ] =useState(false)
 const [loader ,setLoader] =useState(false)
const [issent,setSent] = useState('')
const [code ,setCode] =useState('')
  useEffect(()=>{
CheckUser()

  },[])

  if(userinfo){
       setTimeout(() => {
        if(userinfo.active == false){
          setVerify(true)
        }
        else{setVerify(false)}
       }, 12000);
  }

  const CheckUser = async ()=>{
 await http.get('check-user')
  .then(res=>{
    if(res.data.user){
     setUser(true)
   
    setUserinfo(res.data.info)
    }   
    if(!res.data.verify){
      setGMsg(res.data.msg)
    }
  })
  .catch(err=>{
    setGMsg(err.message)
  })
  }

  if(msg){
    setTimeout(() => {
      setGMsg(null)
    }, 10000);
  }

// sent code

const SentCode = async() =>{
  setLoader(true)
  await http.get('hv-email')
  .then(res=>{
    setLoader(false)
    console.log(res.data)
    setSent(res.data)
  })
  .catch(err=>{
    setLoader(false)
    res.json({msg: err.message})
  })
}

const Logout = async()=>{
  localStorage.removeItem('user-token')
  location.reload()
  
}

const VerifyCode= async()=>{
  setLoader(true)
  await http.post('hv-verify-email' , {otp: code})
  .then(res=>{
    setLoader(false)

    setCode(res.data)
       if(res.data.verify){
        location.reload()

       }
       console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
    setLoader(false)
  })
}

// ------------- delete ac

const DeleteAc= async()=>{
 const isok= window.prompt("Type 'Ok' to delete ");
       isok.toLowerCase()

       if(isok==="ok"){
      await http.delete('del-hv-ac')
      .then(res=>{
        console.log(res.data)
      }).catch(err=>{console.log(err.message)})
       }
}

  return (

<div className='relative min-h-screen'>

<AuthContext.Provider value={{isuser , setGMsg , userinfo , visitor ,setVerify, verify, setVisitor} }>
<BrowserRouter>
      <Routes>
        <Route path='*' element={<Error/>} />
        <Route path='/' element={<Layout />}>
          {/* HOME ROUT */}
          <Route path='/' element={<Home />} />
          <Route path='booking' element={<Booking />} />
          <Route path='tikets' element={<Tickets />} />
          <Route path='trendings' element={<Trendings />} />
          <Route path='about' element={<About />} />
          <Route path='product-view/:id' element={<ProductView/>} />
          <Route path='profile-view/:id/:product' element={<ProfileView/>} />
          <Route path='viewimages' element={<ImageView/>} />

        </Route>


{/* booking section */}




<Route path='/user/view' element={<Listing />}>
          {/* Listing route */}
          <Route path='profile' element={<Profile />} />
            <Route path='payments' element={<Money/>} />
            <Route path='saved' element={<Saved/>} />
          <Route path='listing' element={<ViewList />} >
          <Route path='*' index element={<Active_Listing/>} />
          <Route path='draft/:id/' element={<Draft />} />
     
          </Route>
          <Route path='createlisting' element={<CreateListing />} />
        
          <Route path='edit-profile' element={<Edit_Profile/> } />
 
        </Route>





{/*  profile section */}

<Route path='/user/view/profile'  element={<Listing />}>
<Route path="message" element={<Message/>} />
<Route path="deshbord" element={<Deshbord/>} />
<Route path="edit" element={<Edit/>} >
<Route path='primary' element={<Primary/>}/>
<Route path='intermideate' element={<Intermideate/>} />
<Route path='behost' element={<BeHost/>} />

</Route>
<Route path="setting" element={<Setting/>} />
</Route>

{/* edit prifile section */}
{/* <Route path='/user/view/profile/edit' element={<Edit/>}>
<Route path='primary' element={<Primary/>}/>
</Route> */}
{/* end profile section */}


<Route path='/auth'>
{/* auth route */}
       <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} /> 

       </Route>

       

      </Routes>

    </BrowserRouter>
</AuthContext.Provider>


{
  msg?
  <div onMouseMoveCapture={()=>{setGMsg(null)}} className="fixed  bg-transparent bottom-4 ese-anim right-4 backdrop-blur-3xl px-3 py-2 rounded-lg shadow-sm">
 {msg&&msg}
</div>

:null
}


{
  verify?

  <div className="verify-email lg:w-[60%]  text-center border-slate-800 bg-white p-4 shadow-lg z-50 border h-auto rounded-lg backdrop-blur-2xl  fixed -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4 ">
<div className='text-center w-full flex justify-center items-center  flex-col'>
<div className="flex items-center w-full  justify-between">
<label  className='flex items-center text-green-500 gap-1'><MdMailLock className='text-2xl text-green-500'/> Verify email</label> 
<label className='text-green-500'>{issent.msg?issent.msg:code.msg?code.msg:null}</label>
<label onClick={()=>{setVerify(false)}} className='flex items-center border border-slate-800 rounded-lg  cursor-pointer px-2 py-1  gap-1'><CgClose className='text-2xl '/></label> 
</div>
  <MdFaceUnlock className='text-9xl my-4 animate-pulse text-sky-500'/>
  <b className='flex items-center gap-1'><BiLock className='text-2xl  '/> {userinfo && userinfo.firstname} </b>

  
</div>

{
  issent.sent==true? 

  <div className="flex flex-col justify-center items-center mt-4">
 
<div className="flex items-center justify-between px-1  shadow-sm border border-slate-800 w-2/3 ">
  <MdMailLock className='text-3xl text-green-500 '/> <input onChange={(e)=>{setCode(e.target.value)}}  type="number" className='py-2 px-3 border-none w-full outline-none'disabled={loader && true} placeholder="Type otp code to verify"/> <button  className='px-3 py-2 rounded-lg bg-green-400 text-white  '  onClick={VerifyCode}>{loader? <BiLoader className='text-2xl animate-spin'/> : "Verify"}</button>
</div>
</div>

  :
  <div className="flex flex-col justify-center items-center mt-4">
 
<div className="flex items-center justify-between px-1  shadow-sm border border-slate-800 w-2/3 ">
  <MdMailLock className='text-2xl text-orange-500 '/> <input onchange  type="text" className='py-2 px-3 border-none outline-none'disabled={true} placeholder={userinfo&&userinfo.email}/> <button  className='px-3 py-2 rounded-lg bg-sky-400 text-white  '  onClick={SentCode}>{loader? <BiLoader className='text-2xl animate-spin'/> : "Sent Code"}</button>
</div>
</div>
}

<div className="w-full gap-2 flex mt-4 justify-center items-center text-center">
<button onClick={DeleteAc} className='flex items-center border border-slate-800 rounded-lg shadow-sm cursor-pointer px-2 py-1 text-red-500 gap-1'><RiDeleteBin6Line className='text-2xl text-red-500'/>Delete account</button> 
<button onClick={Logout} className='flex items-center border border-slate-800 rounded-lg shadow-sm cursor-pointer px-2 py-1 text-green-500 gap-1'><BiLogOut className='text-2xl text-green-500'/>LogOut</button> 
</div>
</div>

:null
}




</div>




  )
}
