import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Main.css'
const Main = () => {

     const [value, onChange] = useState(new Date());
    //  const deadlines=()

  return (
    <div className='section-main'>
        <div className='calendar'>
            <Calendar onChange={onChange} value={value} />
        </div>
        <div className='workout'>
           
                <h1>number clients :</h1>
                <button >deadlines clients</button>
         
        </div>

    </div>
  )
}

export default Main