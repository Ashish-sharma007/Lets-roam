import React from 'react'
import Card from './Card'
const Tours = ({tours,removeTour}) => {
  return (
    <div>
    
<div>
 <a href="/">  <h2 className='text-purple-400 font-medium text-center bg-black p-4'>Lets Roam</h2></a> 
</div>
<div>
{tours.map((tour)=> {
    return <Card {...tour} removeTour={removeTour} key={2}/>
})}

</div>
    </div>
  )
}

export default Tours;