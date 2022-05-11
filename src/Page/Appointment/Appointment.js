import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';

const Appointment = () => {
const[date,setDate]=useState(new Date())

    return (
        <div className='px-12'>
        <AppoinmentBanner date={date} setDate={setDate} />
        <AvailableAppoinment date={date} setDate={setDate} />
        </div> 
    );
};

export default Appointment;