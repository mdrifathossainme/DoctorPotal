import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone  from '../../assets/icons/phone.svg'
const Info = () => {
    return (
       <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-6'>
       <InfoCard title={'Opening Hours'} bgColor="bg-gradient-to-r from-secondary to-primary" img={clock} />
       <InfoCard title={'Visit our location'} bgColor='bg-accent' img={marker} />
       <InfoCard bgColor="bg-gradient-to-r from-secondary to-primary" title={'Contact us now'} img={phone} />
       </div>
    );
};

export default Info;