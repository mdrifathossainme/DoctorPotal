import React from 'react';
import img from "../../assets/images/treatment.png"
import PraimayBtn from '../Shared/PraimayBtn';
const DentalCare = () => {
    return (
     <>
    <div class="hero min-h-screen lg:px-24 ">
  <div class="hero-content flex-col md:flex-row ">
    <img src={img} class="max-w-sm " />
    <div className='lg:px-14 md:ml-8'>
      <h1 class="text-4xl font-bold mb-6">Exceptional Dental  Care, on Your Terms</h1>
      <p  >It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page.</p>
      <PraimayBtn >GET STARTED</PraimayBtn>

    </div>
  </div>
</div>
     </>
    );
};

export default DentalCare;