import React, { useEffect, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Slider from 'react-slick';
import Img from '../../Components/Assets/home.jpg'
import { http, path } from '../http/axios';
export default function filter() {
  const [filters ,setFilters] =useState('')
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
   
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "black", background: "black", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />

  };
  
useEffect(()=>{
Getfilters()
},[])


const Getfilters = async ()=>{
 await http.get('get-categorys')
  .then(res=>{
setFilters(res.data.category)
  })
}

  return (
    <div>
  
<div className="mt-3 px-4 mx-4 ">
            <b className='py-4 text-xl'>Filter your suggestion</b>
            <br />
            {
              filters?
              <Slider {...settings}>
             


              {filters?
              
              Object.values(filters).map(todo=>{
                return (
                  <div key={todo.id} className=' p_selector todo grid-cols-1 cursor-pointer  rounded-lg text-center gap-2'>
                 <div className='lg:h-[100px]  overflow-hidden rounded-lg'>
                 <LazyLoadImage
                    src={todo.image? path+todo.image : Img}
                    effect='blur'
                    width="100%"
                    height="100%"
                    className=' selector h-full  w-full'
                  />
                 </div>
                  <b className=" fw-bold">{todo.title&&todo.title}</b>
                </div>
                )
              })
              :"Loading"
              }
                          
              
                           
              
              
                            
                          </Slider>
              :null
            }
  
          </div>


    </div>
  )
}
