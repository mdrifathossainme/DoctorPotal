import React, { useState } from 'react';
import AppoinmentBanner from './AppoinmentBanner';
import AvailableAppoinment from './AvailableAppoinment';
import Footer from '../Shared/Footer';

const Appointment = () => {
const[date,setDate]=useState(new Date())

    return (
        <div className='px-12'>
        <AppoinmentBanner date={date} setDate={setDate} />
        <AvailableAppoinment date={date} setDate={setDate} />
        <Footer/>
        </div> 
    );
};

export default Appointment;