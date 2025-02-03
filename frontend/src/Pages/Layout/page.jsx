import { Outlet } from "react-router-dom"
import Header from "../../Components/Default_c/Header"
import { useContext, useState } from "react"
import { Global } from "../../Context/Global"


function Layout() {

const [division_filt ,setDivision_filt] =useState(null)
const [type , setType] =useState(null)
const [division ,setDivision] =useState(null)
const [viewimages , setViewImages] =useState(null)
  return (
<>
<Global.Provider value={{setDivision_filt , division_filt , type , setType , setDivision , division 
  , viewimages , setViewImages
}}>
<Header/>


<div className=" mb-2">
<Outlet/>
</div>

</Global.Provider>

</>
  ) 

}

export default Layout