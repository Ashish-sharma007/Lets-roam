import React, { useState } from 'react'

const Card = ({id,name,info,image,price,removeTour}) => {

    const [readMore, setReadMore] = useState(false);


    const description = readMore? info : `${info.substring(0,200)}....` 

    function readMoreHandler() {
        setReadMore(!readMore);
    }

 
  return (
    <div className='border border-yellow-300 m-40  w-80  '>
    <img src={image} className='h-40 mx-10' alt="img" />
    <div>
        <h4 className='ml-20'> Rs {price}</h4>
        <h4 className='bg-blue-700 p-2 w-20 text-white ml-20 '>{name}</h4>

    </div>

    <div>
       {description}
        <span className='text-blue-950' onClick={readMoreHandler}>{readMore ? "show less" : "read more"}</span>
    </div>
   
    <button className='bg-red-400 p-2 font-medium border border-black ml-20' onClick={() => removeTour(id)}>Not Interested</button>
   
    </div>
  )
}

export default Card