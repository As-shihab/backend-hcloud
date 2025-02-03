import React, { useContext, useEffect, useState } from 'react'
import animation from "./animation/animation.gif"


 function Home() {


  return (
    <div className=" ese-anim  top-2/4 left-2/4 flex justify-around  -translate-x-2/4 -translate-y-2/4 w-[95%] items-center absolute   p-4  ">
    
<div className='mr-6 w-[60%]'>
<h1 className='text-7xl lg:text-8xl xl:text-9xl mb-4 font-extrabold '>Submit your Home to <span className='text-blue-500 text-8xl lg:text-9xl'>Cloud</span></h1>
<span className='text-xl font-bold text-slate-600  '>Click Next </span>
</div>

      <div className='ml-6 w-[40%] overflow-hidden'>
      <img src={animation} className='w-full p-8'  alt="" />
      </div>
    </div>
  )
}

export default Home
