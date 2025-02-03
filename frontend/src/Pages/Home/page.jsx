import React, { useContext, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Search from '../../lib/product_cards/Search'
import Filter from '../../lib/product_cards/Filter'
import SingleCards from '../../lib/product_cards/SingleCards'
import { http } from '../../lib/http/axios'
import { Global } from '../../Context/Global'

export default function page() {
  const [publish ,setPublish] =useState(null)
  
  useEffect(()=>{
    GetPublish()
  },[])
  const GetPublish=async()=>{
    setPublish(JSON.parse(localStorage.getItem("publish"))&& JSON.parse(localStorage.getItem("publish")))
    await http.get('get-publish')
    .then(res=>{
   setPublish(res.data.publish)
  localStorage.setItem("publish" , JSON.stringify(res.data.publish))
    })
}
console.log()
  return (
  <>
<div className=''>
<Helmet>
      <title>Stays</title>
      <meta name="description" content="Helmet application" />
      </Helmet>

<Search/>

<Filter/>

  <SingleCards publish={publish}  />



    </div>
  
  </>
  )
}
