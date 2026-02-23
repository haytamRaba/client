import React from 'react'
import { useState } from 'react'
import './Example.css'

const Example = () => {
   const [c, setC] = useState(1);

   const handlerincr = () => {
        console.log(`iteration :1 ${c}`);
      setC(c-1);
        console.log(`iteration :2 ${c}`);
      setC(c-1);
        console.log(`iteration :3 ${c}`);
      setC(c-1);
   }

   function handlerdecr(){
    setC(c+1);
   }


  return (

    <div className='section'>
       <button onClick={handlerincr}>-</button>
        <span>{c}</span>
       <button onClick={handlerdecr}>+</button>
    </div>
  )
}

export default Example