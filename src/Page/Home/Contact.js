import React from 'react';
import bg from '../../assets/images/appointment.png';
import PraimayBtn from '../Shared/PraimayBtn';

const Contact = () => {
    return (
        <section className='mt-24 ' style={{background: `url(${bg})`, backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className=" flex justify-center py-12 ">
                <div>
                    <h4 className='text-secondary text-center font-semibold text-xl  '>Contact Us</h4>
                    <h2 className='text-white text-center text-3xl'>Stay connected with us</h2>
                    <form className='mt-12 flex flex-col gap-6'>
                        <input placeholder='Email Address' className='p-4 lg:w-[450px] h-[41px] sm:w-[350px] rounded' type="text" />
                        <input placeholder='Subject' className='p-4 lg:w-[450px] h-[41px] sm:w-[350px]  rounded' type="text" />
                        <textarea placeholder='Your message' className='p-4 rounded' cols="20" rows="5"></textarea>
                        <input className=" cursor-pointer w-[100px] py-3 bg-gradient-to-r from-secondary to-primary text-white upparcas"  type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;