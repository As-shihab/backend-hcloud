import React from 'react'

export default function root_complete() {
 

 const [complete , setComplete] =useState('')
    const [loading , setLoading] =useState(false)
    
    
      useEffect(() => {
        const getprofile = async () => {
          setLoading(true)
          await DB.get('/host/complete')
            .then(res => {
              setComplete(res.data)
          setLoading(false)
          console.log(complete)
            })
        }
        getprofile()
      }, [])

return {complete , loading}

}
