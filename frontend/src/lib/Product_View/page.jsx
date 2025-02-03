import React, { useContext, useEffect, useState } from 'react'
import Img from '../../Components/Assets/default.gif'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { BsArrow90DegLeft } from "react-icons/bs";
import { FaAirFreshener } from "react-icons/fa";
import { GiTowel } from "react-icons/gi";
import { FaHandPointRight } from "react-icons/fa6";
import Review from './Components/Review'
import { http, path } from '../http/axios';
import { UserContext } from '../../Context/UserContext';
import { AuthContext } from '../../Context/AuthContext';
import { Global } from '../../Context/Global';

export default function page() {
  const back = useNavigate()
  const { id } = useParams()
  const [isloading, setLoading] = useState(true)
  const [data, setData] = useState(null)
  const [photos, setPhotos] = useState(null)
  const [clock, setClock] = useState("")
  const [see, setSee] = useState(false)
const [root ,root_path]=useState()

// context
const {setGMsg} =useContext(AuthContext)
const {viewimages , setViewImages} =useContext(Global)
  // making clock


  setInterval(() => {

    const date = new Date()
    const hours = date.getHours()
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    const clockdata = hours + ":" + minute + ":" + seconds + " " + "AM/PM";
    setClock(clockdata)
  }, 1000);

//  -----------------------------------------
// -------------------------------------------


useEffect(()=>{
 GetOneListing()

 

 
},[])

// ------------------------------------------
const [onedata ,setOnedata] =useState('')
const [images , setImages] =useState('')
const [host , setUserInfo] =useState('')



const GetOneListing= async() =>{
  http.get('get-onelisting/'+id)
  .then(res=>{
    console.log(res.data)
    setGMsg("Wait... getting data")
        setOnedata(res.data.onelist)
        console.log(JSON.parse(res.data.onelist.location))
        setLoading(false)
        setUserInfo(res.data.host)
        setImages(JSON.parse(res.data.onelist.images))
        setViewImages(JSON.parse(res.data.onelist.images))
  })
  .catch(err=>{
    setGMsg(err.message)
  })
}



// -------------------------------------------
// --------------------------------------------

  return (

    <div className='lg:px-8 sm:px-4 px-1 md:px-5 '>
      <header className='py-2 px-2 border-b border-slate-100 bg-white flex justify-around items-center'><h1 className='fw-bold cursor-pointer' onClick={() => { back(-1) }}><BsArrow90DegLeft style={{ fontWeight: "bold" }} className='fw-bold ' /> </h1>
        <b>{clock}</b>
        <i className="fa fa-user"></i>
      </header>
      <div className="  w-full flex justify-between mx-3 items-center "><b className="fw-bold text-3xl text-slate-600">View host services</b> <div className="viewbutton px-8 flex gap-2 items-center "><button className="border py-1 px-3 rounded-lg">Save to list</button> <button className="border py-1 px-3 rounded-lg">Enroll Now</button> </div></div>


      <div className="photos-collage relative mt-4 lg:max-h-[400px] sm:w--full lg:h-[400px] rounded-2xl overflow-hidden grid lg:grid-cols-2 sm:grid-cols-1 ">
        {/* postion absolute */}
       
          <Link  className="absolute py-2 px-6 z-10 right-6 hover:cursor-pointer shadow-sm backdrop-blur-sm border-2 border-slate-300 text-white  hover:backdrop-blur-lg rounded-lg flex items-center bottom-6" to="/viewimages"><i className="fa fa-grip mr-2 "></i> View All</Link>
       
        {/* end absolute */}


        <div className="card h-full">
          {
            isloading ? <div className='bg-slate-400 animate-pulse h-full w-full'> </div>

              :


              <LazyLoadImage
                src={images? path+images[0]: Img}
                alt={images? path+images[0]: Img}
                effect='blur'
                height="100%"
                width={`100%`}
                className='h-full'

              />
          }
        </div>


        <div className=" grid  bg-slate-300 grid-cols-2">

          <div className="flex  h-[400px] flex-col items-center ">

            <div className="card w-full h-1/2">
              {
                isloading ? <div className='bg-slate-400 animate-pulse h-full w-full'> </div>

                  :


                  <LazyLoadImage
                  src={images? path+images[1]: Img}
                  alt={images? path+images[1]: Img}
                  effect='blur'
                  height="100%"
                  width={`100%`}
                 className='h-full border rounded-lg border-white'
  
                />
              }
            </div>

            <div className="card w-full h-1/2">
              {
                isloading ? <div className='bg-slate-400 animate-pulse h-full w-full'> </div>

                  :


                  <LazyLoadImage
                  src={images? path+images[2]: Img}
                  alt={images? path+images[2]: Img}
                  effect='blur'
                  height="100%"
                  width={`100%`}
              className='h-full border rounded-lg border-white'
  
                />
              }
            </div>

          </div>


          <div className="flex  h-[400px] flex-col items-center ">

            <div className="card w-full h-1/2">
              {
                isloading ? <div className='bg-slate-400 animate-pulse h-full w-full'> </div>

                  :


                  <LazyLoadImage
                  src={images? path+images[3]: Img}
                  alt={images? path+images[3]: Img}
                  effect='blur'
                  height="100%"
                  width={`100%`}
             className='h-full border rounded-lg border-white'
                />
              }
            </div>

            <div className="card w-full h-1/2">
              {
                isloading ? <div className='bg-slate-400 animate-pulse h-full w-full'> </div>

                  :


                  <LazyLoadImage
                  src={images? path+images[4]: Img}
                  alt={images? path+images[4]: Img}
                  effect='blur'
                  height="100%"
                  width={`100%`}
                 className='h-full border rounded-lg border-white'
  
                />
              }
            </div>

          </div>


        </div>


      </div>
      {/* details seller */}

      <div className="mx-5 flex flex-col-reverse sm:flex-col-reverse mt-4 md:flex-row lg:flex-row xl:flex-row">

        <div className="details-site w-[60%]">
          <h1 className='text-3xl fw-bold text-slate-700'><i className="fa fa-house"></i>{onedata.location? JSON.parse(onedata.location).district: null}

      <b className='px-1'> {onedata.location? JSON.parse(onedata.location).division: null}</b>
          </h1>
          <div className="about-host px-5">
            <span className='text-slate-600'>3 queen bad & atttast bathroom</span>
            <span className='text-slate-600 flex items-center text-sm '><i className="fa  fa-star"> </i><span className="border-b"> 4.0 . <a href="#reviews" className='text-sky-400'>450 reviews</a></span></span>
          </div>

          <div className=" w-full mt-3 text-left">
            <div className="flex py-2 border-b border-t">

            <Link to={`/profile-view/`+ host.id + `/` +id}>
            <div className="user-image cursor-pointer w-[50px] h-[50px] rounded-full border-3 border-slate-600 overflow-hidden">
                <LazyLoadImage
                  src={host.avatar? path+host.avatar: Img}
                  effect='blur'
                  width="100%"
                  height="100%"
                  className='h-full w-full'
                />
              </div>
            
            </Link>

              <div className="user-name px-2">
               <Link to={`/profile-view/`+ host.id + `/` +id}> <b className="text-slate-600 hover:text-sky-500 cursor-pointer">Hosted by {host.firstname&&host.firstname}</b></Link>
                <br />
                <span className='text-sm text-slate-600'>Pro Host . 7 years hosting</span>
              </div>

            </div>

            {/* about hosting */}
            <div className="mt-3">
              <h1 className='text-2xl text-slate-700 fw-[300]'>About this stays</h1>
              <p className='pr-3'>

{/* about this place */}
{/* --------------- */}


{ see?
onedata.description&&onedata.description
:
onedata.description? onedata.description.substring(0 , 50) : null

} 

{/* ---------------- */}
{/* end about  */}
               
                <button className='px-2  text-sky-700 fw-bold  border-b' onClick={() => { setSee(!see) }}>{see ? "See more" : "See less"}</button>
              </p>
            </div>



            {/* end about */}

            {/* what offer5 */}
            <div className="mt-3 ">
              <h1 className='text-2xl text-slate-700 fw-bold'>What offer this place</h1>
              <div className="mt-3 grid grid-cols-2 gap-2 p-2">
                <div className=" flex items-center px-2 border py-1 rounded-lg text-xl text-slate-700 justify-center"><i className="fa fa-wifi PX-1"></i> <p className='px-2'>Wifi</p></div>
                <div className=" flex items-center px-2 border py-1 rounded-lg text-xl text-slate-700 justify-center"><i className="fa-solid fa-bed"></i> <p className='px-2'>Bed</p></div>
                <div className=" flex items-center px-2 border py-1 rounded-lg text-xl text-slate-700 justify-center"><FaAirFreshener /> <p className='px-2'>Air Fresher</p></div>
                <div className=" flex items-center px-2 border py-1 rounded-lg text-xl text-slate-700 justify-center"><GiTowel /> <p className='px-2'>Towels</p></div>
              </div>
             <button className='py-1 px-2 border-2 border-slate-200 rounded '>View all 12 facility</button>

            </div>
            {/* end offer */}
          </div>
        </div>

        <div className="payment-site mt- w-[35%] text-center">
          <div className="card text-center p-2 flex justify-center items-center">
            <div className="user-image w-[120px] h-[120px] rounded-full border-4 border-green-600 overflow-hidden">
              <LazyLoadImage
                src={host.avatar? path+host.avatar: Img}
                effect='blur'
                width="100%"
                height="100%"
                className='h-full w-full'
              />
            </div>
            <span className='bg-green-200 rounded-sm px-3  my-1'>New</span>



            <div className="massege-host  ">
              <b className="text-xl my-1 cursor-pointer hover:text-sky-500" >{host.firstname&&host.firstname} [Pro]</b>  <br />
              <span className="text-slate-500">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
              </span>
            </div>

            <div className="info-bar text-left px-5 mt-2  w-full">
              <h2 className='border-b fw-bold text-slate-600 pb-1'>Ratings as host ads</h2>
              <div className="flex justify-between itmes-center">
                <span className='w-[100px]'>Behaviour</span>
                <span><i className="fa fa-arrow-up text-green-700"></i></span>
                <span><i className="fa fa-star text-orange-400"></i> 4.5 /  5.00</span>
              </div>

              <div className="flex justify-between itmes-center">
                <span className='w-[100px]'>Place</span>
                <span><i className="fa fa-arrow-up text-orange-600"></i></span>
                <span><i className="fa fa-star text-orange-400"></i> 2.5 / 5.00</span>
              </div>


              <div className="flex justify-between itmes-center">
                <span className='w-[100px]'>Facility</span>
                <span><i className="fa fa-arrow-down text-red-300"></i></span>
                <span> <i className="fa fa-star text-orange-400"></i> 1.5 / 5.00</span>
              </div>




            </div>



            <div className=" w-full py-2 px-3 bg-slate-900 mt-4 text-slate-100 rounded-lg cursor-pointer hover:bg-slate-700"><i className="fa fa-message px-1"></i> Message Host</div>
            <div className=" w-full py-3 px-3 gap-2 flex items-center justify-center bg-blue-700 mt-4 text-slate-100 rounded-lg cursor-pointer hover:bg-blue-600"><FaHandPointRight /> Enroll this Stays</div>
          </div>
        </div>



      </div>

      {/* end seller */}


      {/* review section */}

     <div id="reviews" className='mx-5 mt-5'>
     <Review/>
     </div>
    </div>
  )
}
