import React from 'react';
import fluoride from "../../assets/images/fluoride.png" 
import cavity from "../../assets/images/cavity.png" 
import whitening from "../../assets/images//whitening.png" 
import Service from './Service';


const Services = () => {
const alservice=[
    { _id:1,
        title:"Fluoride Treatment",
         dis:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img:fluoride},
    
       { _id:2,
        title:"Cavity Filling",
         dis:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img:cavity},
       { _id:3,
        title:"Teeth Whitening",
         dis:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        img:whitening}
]
   


    return (
        <div className='mt-12'>
            <h3 className='text-secondary font-bold text-xl text-center'>OUR SERVICES</h3>
            <h2 className='text-accent font-semibold text-3xl text-center'>Services We Provide</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 mt-8 ' >
                {
                    alservice.map(sr=><Service service={sr} key={sr._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;