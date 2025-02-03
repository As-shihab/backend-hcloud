import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Bar } from 'react-chartjs-2'
export default function page() {
  return (
    <div className='grid grid-cols-2 gap-2'>
    
<div className="card">
<Bar
data={
  {
    labels:['hello' , 'todo' , 'mama'],
    datasets:[
      {
        label:"reven",
        data:[232, 434,343]
      }
    ]
  }
}
/>
</div>

<div className="card">
<Bar
data={
  {
    labels:['hello' , 'todo' , 'mama'],
    datasets:[
      {
        label:"reven",
        data:[232, 434,343]
      }
    ]
  }
}
/>
</div>
    
    </div>
  )
}
