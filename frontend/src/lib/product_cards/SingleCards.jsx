import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../Components/Assets/home.jpg'
import Slider from 'react-slick'
import { CiStar } from "react-icons/ci";
import { path } from '../http/axios'
import { Global } from '../../Context/Global'
export default function SingleCards({publish}) {
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

        <div className=" px-5">

          

            <div className="grid lg:grid-cols-4  gap-3  sm:grid-cols-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 mt-2">

            

                {
                    publish?
                  Object.values(publish).filter(todo=>{if(division==""){return todo}
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
                                <Link to={`product-view/`+detum.id}>  <b className="fw-bold hover:text-sky-500 cursor-pointer">
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
                                <Link to="booking-view">    <button className='text-sm border rounded-lg py-1 px-2 fw-300 hover:bg-sky-100  text-sky-400 '> To Enroll</button></Link>
                            </div>
                        </div>
                    </div>
                    )
                  })

                  :null

                }

            </div>


        </div>

    )
}
