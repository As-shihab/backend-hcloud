import React, { useContext, useState } from 'react'
import { FiUploadCloud } from 'react-icons/fi'
import { ListingContext } from '../../../../../Context/ListingContext'


export default function FileSub() {
  const [files ,setFiles] =useState(null)
  const {setNext , listingdata ,setListingData , setFile} = useContext(ListingContext)
  const SelFIle = ()=>{
    document.querySelector('.selfile').click()
  }


  if(files){
   setTimeout(() => {
    setNext(true)
    setFile(files)
   }, 100);
  }else{
    setNext(false)
  }

  return (
    <div>
  <div onClick={SelFIle} className="sel cursor-pointer rounded-lg h-[30vh] shadow-lg text-center w-full flex justify-center items-center border-2 border-slate-200 py-4 px-2">
 <input onChange={(e)=>{setFiles(e.target.files)}} hidden type="file" className='selfile' accept='image/*' multiple />
   <div className="flex flex-col justify-center items-center ">
   <FiUploadCloud className='text-7xl text-slate-700 lg:text-9xl font-bold '/>
   <b className='text-2xl text-gray-500 '>Select Photos {files&&files.length}</b>
   </div>
  </div>

{files?
<div className='grid grid-cols-2 mt-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
i found tdhe file
  </div>


:<div className="grid grid-cols-2 mt-2 gap-2 md:grid-cols-3 lg:grid-cols-4">
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
<div className="card py-4 px-3 rounded-lg animate-pulse bg-gray-100 lg:h-[200px] shadow-lg border-2 border-slate-200"></div>
</div>}

    </div>
  )
}
