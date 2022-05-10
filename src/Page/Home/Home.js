import React from 'react';

import AppointmentSection from './AppointmentSection';
import Banner from './Banner';
import DentalCare from './DentalCare';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='mx-12 mb-5'>
           <Banner/>
           <Info/>
           <Services/>
           <DentalCare/>
           <AppointmentSection/>
        </div>
    );
};

export default Home;