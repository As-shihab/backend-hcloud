import React, { useContext, useEffect, useRef, useState } from 'react'
import Img from '../../Components/Assets/home.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { BiLoader, BiReset, BiSearch } from 'react-icons/bi';
import { http } from '../http/axios';
import { Global } from '../../Context/Global';
export default function Search() {
    const  [seach ,setSearch] = useState(false)
    const [filt ,setFilt] =useState(false);
    const [room ,setRoom] =useState(1)
    const [person ,setParson] =useState(1)
    const [keyword ,setKeyword] =useState('')
    const [district , setDistrict] =useState(null)
    const [seldiv ,setDiv] =useState('');
    const searchref = useRef()
    const {setDivision} =useContext(Global)
    useEffect(()=>{
        if(seach){
            GetDistrict()
        }
    },[seach])
    const GetDistrict= async()=>{
        await http.get('get-division')
        .then(res=>{
            setDistrict(res.data)
           
        }).catch(err=>{
            console.log(err.message)
        })


        const SearchHandler = (e)=>{
            if(!searchref.current.contains(e.target)){
                setSearch(false) 
            }
            return removeEventListener()
        }


        document.addEventListener('mousedown' , SearchHandler)

     
    }

    
 
  return (
    <div className='text-center flex-col z-10 relative flex justify-center items-center'>

<div className="grid grid-cols-3 items-center backdrop-blur-lg px-1 mt-2 lg:w-2/4 py-3 lg:h-15 rounded-full shadow-sm border overflow-hidden ">
    <div onClick={()=>{setFilt(false); setSearch(true)}} className="h-full  cursor-pointer flex flex-col    "><b className='text-slate-500 px-3'>Where your destination</b>
    </div>
    <div onClick={()=>{setFilt(true); setSearch(false)}} className="h-full  text-slate-700 cursor-pointer">Filter guyst <br /> Customize Gysts</div>
    <div className="h-full flex items-center cursor-pointer justify-center  "><div className="flex justify-center items-center gap-1 text-white px-4 py-2 rounded-full bg-sky-500"><i className="fa fa-search text-xl "></i><span>Search</span></div></div>

</div>


{
    filt?
    <div className="absolute backdrop-blur-lg rounded-lg top-[6rem] border border-gray-100 shadow-sm p-3">
<div className="flex justify-around items-center p-3">
    <div className="flex justify-around items-center">
        <b className="text-slate-700">Persons<br />
        <font className="text-xs text-slate-500">How many person ?</font></b>
    </div>

    <div className="counter flex justify-around px-7 items-center">
        <div className='flex gap-4' >
            <button disabled={person < 2 ? true : false} onClick={()=>{setParson(person -1)}}><i className="fa  fa-minus"></i></button>
            <b className='p-3 border-2 border-white rounded-lg text-sky-400 font-bold text-3xl'>{person}</b>
            <button disabled={person > 9 ? true : false} onClick={()=>{setParson(person +1)}}><i className="fa fa-plus"></i></button>
        </div>
    </div>
</div>

<div className="flex justify-around items-center p-3">
    <div className="flex justify-around items-center">
        <b className="text-slate-700">Room<br />
        <font className="text-xs text-slate-500">How many room?</font></b>
    </div>

    <div className="counter flex justify-around px-7 items-center">
    <div className='flex gap-4' >
            <button disabled={room < 2 ? true : false} onClick={()=>{setRoom(room -1)}}><i className="fa  fa-minus"></i></button>
            <b className='p-3 border-2 border-white text-orange-500 rounded-lg font-bold text-3xl'>{room}</b>
            <button disabled={room > 4 ? true : false} onClick={()=>{setRoom(room +1)}}><i className="fa fa-plus"></i></button>
        </div>
    </div>
</div>
</div>
: seach ?  <div ref={searchref} className="absolute border border-gray-300 backdrop-blur-lg rounded-lg p-3 top-[6rem] mr-12  shadow-sm ">
    <div className=" w-full px-2 flex items-center my-2 bg-transparent border-2 border-slate-100 rounded-lg "><input type="text" onChange={(e)=>{setKeyword(e.target.value)}} placeholder='Type to find divisions' className='w-full text-white filt-search py-2 border-none outline-none bg-transparent' name="" id="" />
    {keyword?
<BiReset onClick={()=>{setKeyword(""); setDivision("")}} className='text-xl cursor-pointer text-red-500 font-bold'/>: seldiv?
<BiReset onClick={()=>{setDiv(""); setDivision("")}} className='text-xl cursor-pointer text-red-500 font-bold'/> :
<BiSearch className='text-xl cursor-pointer text-white font-bold'/>
    }
    </div>
<div className="grid gap-2 grid-cols-2">



{district?

Object.values(district).filter(data=>{if(keyword==""){return data}else{return data.label.toLowerCase().includes(keyword.toLowerCase())}}).slice(0, 4).map(all=>{
    return(
        <div onClick={()=>{setDiv(all.label); setDivision(all.label)}} className={`flex flex-col  cursor-pointer`}>
        <LazyLoadImage
        effect='blur'
        src={Img}
        className={`${seldiv===all.label && `border-4 border-green-400 ese-anim`} rounded-lg`}
        />
          <b className={`${seldiv===all.label ? ` text-green-500` :`text-slate-700`} `}>{all.label&&all.label}</b>
         </div>
    )
})
:<div className='text-center flex items-center text-white w-full'><BiLoader className='animate-spin text-2xl'/> Loading....</div>
}




</div>

</div> 
:null 

}



    </div>
  )
}
