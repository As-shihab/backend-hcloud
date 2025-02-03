import React, { useContext } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Img from '../../../../Components/Assets/home.jpg'
import { UserContext } from '../../../../Context/UserContext'
import { path } from '../../../../lib/http/axios'
export default function page() {
    const {listing} =useContext(UserContext)
  return (
    <div>



<div className="relative overflow-x-auto shadow-md sm:rounded-lg">

    <table className="w-full shadow-sm text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
                
                <th scope="col" className="px-6 py-2">
                    Profile
                </th>
                <th>
                    Reach
                </th>
                <th scope="col" className="px-6 py-2">
                    Click
                </th>

               

                <th scope="col" className="px-6 py-2">
                    Position
                </th>
                <th scope="col" className="px-6 py-2">
                    Status
                </th>
                <th scope="col" className="px-6 py-2">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>

            {
                Object.values(listing).filter(todo=>{if(todo.publish==true || todo.publish==false && todo.draft==false){return todo}}).map(list=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            
                        <th scope="row" className="flex justify-start  items-start px-6 py-3  font-medium text-gray-900 whitespace-nowrap ">
                        <LazyLoadImage
                        effect="black-and-white"
                        className='w-[120px] rounded-lg'
                  src={JSON.parse(list.images)? path+ JSON.parse(list.images)[0]  : Img}
                  />
                            <div className="ps-3">
                            
                                <div className="text-base font-semibold">Bonnie Green</div>
                                <div className="font-normal text-gray-500">bonnie@flowbite.com</div>
                            </div>
                        </th>
        
        
                        <td className="px-6 py-4 ">
                       <b>937450</b>
                        </td>
                        <td className="px-6 py-4 ">
                       <b>343</b>
                        </td>
        
                        <td className="px-6 py-4 ">
                       <div className="flex items-center">   <i className="fa fa-arrow-up text-green-500"></i> 
                       <b className='px-2'>Good</b></div>
                        </td>
                        <td className="px-6 py-4">
                            <div className="flex items-center">
                                <div className={`h-2.5 w-2.5 rounded-full ${list.publish? `bg-green-500` : `bg-red-500`} me-2`}></div> {list.publish == true ? "Online" :"Offline"}
                            </div>
                        </td>
                        <td className="px-6 py-4">
                           <button className="py-2 px-3 rounded-lg border text-sky-500 border-sky-400">Deshbord</button>
                        </td>
                    </tr>
                    )
                })
            }
     
           
        
       
       
        </tbody>
    </table>
</div>



    </div>
  )
}
