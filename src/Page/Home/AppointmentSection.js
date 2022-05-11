import React from 'react';
import img from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png';
import PraimayBtn from '../Shared/PraimayBtn';
const AppointmentSection = () => {
    return (
       <section style={{
           background:`url(${bg})`
           
           
           }} className='flex justify-center items-center mt-12'>
           <div  className=" flex-1 hidden md:block">
               <img className=' mt-[-120px]' src={img} alt="" />
           </div>
           <div className="aapoinment-text flex-1 text-white px-8 py-4">
               <h3 className='text-xl font-semibold  mb-4 text-secondary'>Appointment</h3>
               <h2 className='mb-4 text-3xl font-semibold '>Make an appointment Today</h2>
               <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
               <PraimayBtn>GET STARTED</PraimayBtn>
           </div>
       </section>
    );
};

export default AppointmentSection;