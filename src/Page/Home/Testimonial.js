import React from 'react';
import bg from '../../assets/icons/quote.svg'
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import SingleTesimonial from './SingleTesimonial';

const Testimonial = () => {
const tesimonial=[
    {
        id:1,
        name:"Akkas Ali",
        place:"Noyakhali",
        body:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:img1
        
    },
    {
        id:2,
        name:"A.Kuddus Ali",
        place:"Dhaha",
        body:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:img2
        
    },
    {   
        id:3,
        name:"Selenima Begon",
        place:"Cumilla",
        body:"It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
        img:img3
        
    }
]



    return (
       <section className='mt-24'>
          <div className='flex justify-between 	'>
              <div><h4 className=" text-xl text-secondary font-bold">  Testimonial</h4>
               
                <h3 className='text-3xl'>What Our Patients Says</h3></div>

                <div className='sm:w-4' >
              <img className='sm:w-3/12' src={bg} alt="" />
          </div>
             </div>

           <div className='mt-32 grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
               { 
                   tesimonial.map(tm=><SingleTesimonial key={tm.id} stm={tm}></SingleTesimonial>)
               }
           </div>
       </section>
    );
};

export default Testimonial;