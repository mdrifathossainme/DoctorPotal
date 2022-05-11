import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppoinmentBanner = ({date, setDate}) => {

    return (
        <div style={{backgraound:`url(${chair})`}}  className="  hero min-h-screen  ">
        <div  className="  hero-content f lg:flex-row-reverse">
          <img className='w-96' src={chair} alt="chair" />
          <div >
            <DayPicker 
             mode="single"
             selected={date}
             onSelect={setDate}
            />        
          </div>
        </div>

      </div>
      
    );
};

export default AppoinmentBanner;