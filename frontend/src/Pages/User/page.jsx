// import Header from "./Components/Header";
import Profile_menubar from './Components/Profile_menus'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

// user components

import { Helmet } from 'react-helmet'
import { UserContext } from '../../Context/UserContext'
import { useContext, useEffect, useReducer, useState } from 'react'
import { http } from '../../lib/http/axios'
import { AuthContext } from '../../Context/AuthContext'
export default function(){
    const [listing, setListing] =useState('')
    const [loader  ,setLoader] =useState(true)
    const {setGMsg} =useContext(AuthContext)
    const [update ,ForcUpdate] =useState(0)
    useEffect(()=>{
GetListing()
    },[update])

loader? setGMsg("Getting user listing") : null
  const GetListing= async()=>{
    await http.get('get-listing')
    .then(res=>{
        setLoader(false)
        setListing(res.data)
    })
    .catch(err=>{
       if(err){
        setGMsg("Error to load listing ")
       }
    })
  }
   
    return(
        <UserContext.Provider value={{listing , loader ,update, ForcUpdate}}>

<Helmet>
            <title>Profile</title>
        </Helmet>
    <div className='h-screen   overflow-hidden'>
 
   
    
       
       <div className="flex profile_cont justify-between h-full  items-start">
        <div className="profile_menubar border rounded-2xl h-full   ">

        <Profile_menubar/>
        </div>


        <div className="viewbar "> 
        <Header/>


<Outlet/>


        </div>
       </div>
    
       </div>
       </UserContext.Provider>)
}