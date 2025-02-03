import React, { useContext, useEffect, useState } from 'react'
import { IoCheckmarkDone } from 'react-icons/io5'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useParams } from 'react-router-dom'
import Img from '../../../Components/Assets/home.jpg'
import { SiMsi } from 'react-icons/si'
import { BsActivity } from 'react-icons/bs'
import { LiaSkatingSolid } from 'react-icons/lia'
import { http } from '../../http/axios'
import SingleCards from '../../product_cards/SingleCards'
import Slider from 'react-slick'
import { CiStar } from "react-icons/ci";
import { path } from '../../http/axios'
import { Global } from '../../../Context/Global'
import { BiLoader } from 'react-icons/bi'
import { Helmet } from 'react-helmet'
import { MdDetails, MdVerified } from 'react-icons/md'
import { TbDetails } from 'react-icons/tb'

export default function ProfileView() {
    const {id , product} = useParams()
    const [type , setType] =useState('stays')
    const [stays ,setStays] =useState(null)
    const [profile,setProfile] = useState(null)
    const [tickets ,setTickets] =useState("tickets")
    const [events ,setEvents] =useState("events")
    const [review ,setRevies] =useState('reviews')
   

    useEffect(()=>{
      GetStays()
      GetProfile()
       
    },[])


    useEffect(()=>{
      if(type==="tickets"){
    GetTickets()
      }

      if(type ==="events"){
      GetEvents()
      }
      if(type==="reviews"){
       GetReview()
      }
    },[type])

// get events 
const GetEvents = async() =>{
  setTimeout(() => {
    setEvents(null)
    }, 1000);
}


// ------------get tickets

const GetTickets = async()=>{
setTimeout(() => {
setTickets(null)
}, 1000);



}

// const get review
const GetReview= async() =>{
  setTimeout(() => {
    setRevies(null)
    }, 1000);
}

// -----------get stays
    const GetStays = async()=>{

      await http.get(`/user-list/${id}/${product}`)
      .then(res=>{
        console.log(res.data)
        
        setStays(res.data.publish)
      })
    }

    // get user profile 

    const GetProfile = async()=>{
      await http.get('/get-user/'+id)
      .then(res=>{
     
        setProfile(res.data.host)
      })
    }


    // ------------------

console.log(profile)

    const {division} = useContext(Global)
    function Next_Photos(props) {
        const { onClick } = props
        return (
          <div onClick={onClick} className=' carus top-[50%] absolute  right-6'>
            <i className="fa  right-5   hover:text-white   p-2 rounded-full hover:bg-slate-700 bg-slate-100 cursor-grab fa-arrow-right"></i>
          </div>
        )
      }

      const single_product = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    
        nextArrow: <Next_Photos />
      }
   
  return (
    <div>

  <Helmet>
      <title>{profile? profile.firstname : "User"} {profile? profile.lastname : "..."} | Hcloud</title>
      <meta name="description" content="Helmet application" />
      </Helmet>
        <div className=" flex items-start justify-start gap-3 font-bold">
            <div className="w-[40%]  lg:h-[90vh] relative flex flex-col justify-start items-center rounded-2xl p-3 shadow-lg h-full ">
       
     
<div className='w-full h-[250px] rounded-lg overflow-hidden relative'>

<LazyLoadImage
src={profile? path+profile.avatar:Img}
effect='blur'
width="100%"
height="100%"

/>

<div className='backdrop-blur-sm w-full h-full flex justify-center items-center rounded-lg absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 '>
<div className='lg:w-[150px] lg:h-[150px]  shadow-sm z-10 border-[5px] border-sky-500  rounded-full  '>
                <LazyLoadImage
                  src={profile? path+profile.avatar:Img}
                  effect='blur'
                  height="100%"
                  width="100%"
                  className='  h-full w-full  rounded-full'
                />
             </div>
</div>
</div>

 {/* ------------------- profile system------------------ */}



<div className='text-center w-full relative text-xs mt-2 '>
<b className='text-5xl flex justify-center items-center w-full my-3'>{profile?profile.firstname?profile.firstname:null:null} {profile?profile.lastname?profile.lastname:null:null} <MdVerified className='mx-2 text-sky-500'/> </b>
<div className="flex justify-center items-center">
<div className="flex justify-center items-center text-2xl rating star">
  <CiStar/>
  <CiStar/>
  <CiStar/>
  <CiStar/>
</div>
<b  className='text-xl'>4.5</b>
</div>
<p className='w-[80%] m-auto my-2 text-slate-500'>bring the world close togather tody we are going to show ayour how you can build, so the system should  entusted</p>

<div className="flex justify-center items-center gap-4 mt-3">
  <button className='px-4  text-xl py-2 rounded-lg shadow-sm bg-sky-500 text-white'>Follow</button>

  <button  className='px-4 py-2 text-xl rounded-lg shadow-sm bg-blue-500 text-white'>Message</button>
</div>

<div className="rounded-lg mt-4 shadow-sm w-full p-2">
  <b className='text-left py-2 flex text-xl text-slate-700 items-center'><TbDetails className='mx-2 text-xl' /> Details</b>
  <div className="mt-1 px-2 ">
    <div className="flex gap-2 items-center">
      <span>Company</span> <b>Tdl llc</b>
    </div>

    <div className="flex gap-2 items-center">
      <span>Company</span> <b>Tdl llc</b>
    </div>
  </div>
</div>
</div>




 {/* =---------------------------end ---------------------- */}




 
    

          
    
            </div>
            <div className="w-[60%] p-1 h-[90vh]  overflow-x-hidden">
                <div className="py-2 flex justify-around shadow-lg rounded-lg items-center px-3">
                   <IoCheckmarkDone className='text-green-400 text-3xl font-bold '/>

                   <div className='flex flex-col '>
                    <b className='text-xl text-gray-600'>Ready to Booking</b>
                    <span className="text-gray-400 text-xs">The agreement is signed and the move is ready for booking</span>
                   </div>
          <button className='bg-sky-400  text-white px-3 py-2 rounded-lg shadow-lg '>Book now</button>
                </div>

                <div className="grid grid-cols-3 gap-2 mt-3">
                
                <div className="card backdrop-blur-lg shadow-lg text-center rounded-lg p-3">
                <div className="flex items-center">
                    <LiaSkatingSolid className='text-2xl text-green-500'/>
                    <span>Live Stays</span>
                  </div>

              <div>
                <b className='text-5xl py-2 text-slate-600'>{stays?stays.length: <BiLoader className='animate-spin text-2xl'/>}</b>
                <div className="mt-2 text-left cursor-pointer px-2 py-2 text-xs border-t border-gray-200 w-full">
                View all Tickets
                </div>
              </div>

                </div>

                <div className="card backdrop-blur-lg shadow-lg text-center rounded-lg p-3">
                <div className="flex items-center">
                    <LiaSkatingSolid className='text-2xl text-green-500'/>
                    <span>Live Tickets</span>
                  </div>

              <div>
                <b className='text-5xl py-2 text-slate-600'>3</b>
                <div className="mt-2 text-left cursor-pointer px-2 py-2 text-xs border-t border-gray-200 w-full">
                View all Tickets
                </div>
              </div>

                </div>


                <div className="card backdrop-blur-lg shadow-lg text-center rounded-lg p-3">
                <div className="flex items-center">
                    <LiaSkatingSolid className='text-2xl text-sky-500'/>
                    <span>Live Events</span>
                  </div>

              <div>
                <b className='text-5xl py-2 text-slate-600'>3</b>
                <div className="mt-2 text-left cursor-pointer px-2 py-2 text-xs border-t border-gray-200 w-full">
                View all Tickets
                </div>
              </div>

                </div>
                
                </div>

                  <div className="px-2 mt-4 shadow-lg rounded-lg   py-3">
                    <div className=" py-2 my-1 border-b border-slate-200 flex items-center gap-2">

                      <button onClick={()=>{setType("stays")}} className={`px-4 py-1 rounded-full shadow-sm border border-slate-200  ${type==="stays" && `bg-slate-800 text-white`}`}>{stays? "Stays" :<BiLoader className='animate-spin text-2xl'/> }</button>
                      <button onClick={()=>{setType("tickets")}} className={`px-4 py-1 rounded-full shadow-sm border border-slate-200  ${type==="tickets" && `bg-slate-800 text-white`}`}>{tickets? "Tickets" :<BiLoader className='animate-spin text-2xl'/> }</button>
                      <button onClick={()=>{setType("events")}} className={`px-4 py-1 rounded-full shadow-sm border border-slate-200  ${type==="events" && `bg-slate-800 text-white`}`}>{events? "Events" :<BiLoader className='animate-spin text-2xl'/> }</button>
                      <button onClick={()=>{setType("reviews")}} className={`px-4 py-1 rounded-full shadow-sm border border-slate-200  ${type==="reviews" && `bg-slate-800 text-white`}`}>{review? "Reviews" :<BiLoader className='animate-spin text-2xl'/> }</button>
                      </div>

{
  type==="stays" &&

  <div className="w-full">
    <div className="grid grid-cols-2 gap-2   mt-2">

            

{
    stays?
  Object.values(stays).filter(todo=>{if(division==""){return todo}
else{
  return division? division.includes(JSON.parse(todo.location).division) : todo
}
}).map(detum=>{
    return(
          
        <div key={detum.id} className="product-img relative rounded-lg py-1 lg:mt-3 border border-slate-400  shadow-sm">

        <Slider {...single_product} className='relative    '>
        
            {
                detum.images?

                Object.values(JSON.parse(detum.images)).map(all=>{
                    return(
                  <div key={all} className='lg:h-[210px] overflow-hidden'>
                          <LazyLoadImage
                        src={path+all}
                        height="100%"
                        width="100%"
                        effect='blur'
                        className=' w-full bg-cover size-fit h-full rounded-lg'
                    />
                  </div>
                    )
                })

                : 

                <LazyLoadImage
                src={Img}
                effect='blur'
                className='h-[200px]  rounded-lg'
            />
            }

        
        </Slider >

        <div className="single-slider-info">
            <div className="flex justify-between px-2  fw-bold">
                <Link to={`/product-view/`+detum.id}>  <b className="fw-bold hover:text-sky-500 cursor-pointer">
                  {detum.location? JSON.parse(detum.location).district:null}  
                 <b>  {detum.location? JSON.parse(detum.location).division:null} </b> 
                </b></Link>

                <span className='flex items-center '><CiStar className='fw-bold text-black text-[23px] px-1' />5.0</span>
            </div>
            <div className="text-sm px-2 text-slate-500">
                Hosted by shihab
            </div>
            <div className="text-md px-2 flex text-slate-500">
                <span>Oct 4 to infinite</span>
            </div>

            <div className="text-lg px-2 fw-bold items-center justify-between  flex text-slate-700">
                <span>$343 per day</span>
                <Link to={`/product-view/`+detum.id}>    <button className='text-sm border rounded-lg py-1 px-2 fw-300 hover:bg-sky-100  text-sky-400 '> To Enroll</button></Link>
            </div>
        </div>
    </div>
    )
  })

  :null

}

</div>
  </div>
  
}

                  </div>
            </div>
        </div>
    </div>
  )
}
