
import React, { useContext, useEffect, useState, useSyncExternalStore } from 'react'
import Home from './Progessors/Home'
import Selection from './Progessors/Selection'
import Select_location from './Progessors/Select_location'
import Descript from './Progessors/FileSub'
import Pricing from './Progessors/Pricing'
import Allset from './Progessors/Allset'
import { ListingContext } from '../../../../Context/ListingContext'
import { http } from '../../../../lib/http/axios'
import { AuthContext } from '../../../../Context/AuthContext'
import { UserContext } from '../../../../Context/UserContext'
import { BiLoaderCircle } from 'react-icons/bi'
export default function page() {
    const {setGMsg} =useContext(AuthContext)
    const {update , ForcUpdate} = useContext(UserContext)
    const [progerss ,setProgress]=useState(0)
    const [isok , setOk] =useState(true)
    const [listingid  , setListingId] =useState('')
    const [loader ,setLoader] =useState(false)
    const [file ,setFile] =useState(null)
    const [next , setNext] =useState(true)
     const [productId , setProductId] =useState(null)
    
    const [listingdata , setListingData]=useState({
        title:'',
        location : '',
        description:''
        
  
    })
   useEffect(()=>{
    Number(progerss) < 2 && setNext(true)
   },[])


     const MakeDraft= async() =>{
        setLoader(true)

        await http.post(`draft-listing` , 
               listingdata
        )
        .then(res=>{
            console.log(res.data)
            setLoader(false)
            setGMsg(res.data.msg)
            ForcUpdate(update +1)
        }).catch(err=>{
            console.log(err.message)
        })
     }

     
    const Next_Handle= ()=>{
        setProgress(progerss + 20)
    }
    const Back_Handle = ()=>{
        setProgress(progerss - 20)
    }

    const CreateListing = async()=>{
        setLoader(true)
    if(file){
        const formdata = new FormData()
        for(let i =0; i< file.length; i++){
            formdata.append('images' , file[i])
            
        }
        await http.post(`new-listing/ ${productId}`, formdata)
        .then(res=>{
            setLoader(false)
            setGMsg(res.data.msg)
            console.log(res.data)
        }).catch(err=>{ setGMsg(err.message)
              setLoader(false)
            
        })
    }
    else{
        setGMsg("No file found to upload")
    }
    
    }
    
  return (
    <div className='relative h-[91vh]'>

<div className="relative overflow-y-scroll h-[80vh]">
<ListingContext.Provider value={{listingdata ,setListingData , setNext , setFile , setProductId , productId}}>
{ progerss < 20 ?  <Home/> : progerss < 40 ? <Selection /> : progerss < 60 ? <Select_location /> : progerss < 80 ? <Pricing/> : progerss < 100 ?  <Descript/> : <Allset />}
</ListingContext.Provider>

</div>


<footer className=' progress-cont shadow-lg border-2 border-slate-200 rounded-2xl px-4 py-3 backdrop-blur-lg'>
        <div className="progressbar">
<div className='progerss-data  w-full h-full' style={{width: progerss+"%"}}></div>
        </div>
        <div className="progresser  flex justify-between rounded-lg  items-center  ">
{progerss < 19 ? null :         <button disabled={progerss < 1 ? true : progerss == 100 ? true : false} onClick={Back_Handle} type="button" className={`text-white bg-stone-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  px-4 py-1.5   focus:outline-none ${progerss > 95 ? `d-none` : `d-block`} `}>Back</button>}
{
    progerss < 19? null : progerss ==100? null :
    <button onClick={MakeDraft} disabled = {loader? true:false} type="button" className={`text-white  ${!isok ? `bg-slate-600 cursor-not-allowed` : `bg-blue-500`} focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5    focus:outline-none`} >{loader ? <BiLoaderCircle className='text-xl animate-spin'/>: "Save draft"}</button>

}
        <button  disabled={ progerss < 20? false: next? false: true} type="button" className={`text-white ${!next? `bg-gray-700 cursor-not-allowed text-white`:`bg-blue-500 cursor-pointer` } py-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4     focus:outline-none`} onClick={progerss==100?CreateListing: Next_Handle}>{ loader ? <BiLoaderCircle className='text-xl animate-spin'/>:   progerss > 95 ? "Create" :  "Next"}</button>
        </div>
    </footer>


   
    
    </div>
  )
}
