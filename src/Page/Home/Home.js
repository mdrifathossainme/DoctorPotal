import React from 'react';

import AppointmentSection from './AppointmentSection';
import Banner from './Banner';
import Contact from './Contact';
import DentalCare from './DentalCare';
import Info from './Info';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-12'>
           <Banner/>
           <Info/>
           <Services/>
           <DentalCare/>
           <AppointmentSection/>
           <Testimonial/>
           <Contact/>
        </div>
    );
};

export default Home;