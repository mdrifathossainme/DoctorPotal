import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L0f5ODF4jr9Eb1gaJNlGaHr8vxO6jWXWmdAngCkj8oSpZK1gFhXUrXlrCukYH7qWgU9ttMs8uo86s9dxtB9OLeY00BNmwf0Tg');
const Payment = () => {
    const {id}=useParams();
    const url=`https://infinite-brook-24824.herokuapp.com/booking/${id}`

    const {data ,isLoading}=useQuery('doctor', ()=>fetch(url).then(res=>res.json()))



    if(isLoading){
        return <Loading/>
    }
    return (
       <>
        <div class="card px-12 my-8 w-[50%] bg-base-100 shadow-xl ">
        <div class="card-body">
            <h2 class="card-title text-success font-bold">Hello {data.patientNanme} </h2>
            <h2 className='text-2xl font-semibold'>
                Place pay For {data.treatment}
            </h2>
            <p>You Appointment{data.date } Time {data.slot}</p>
            <p className='font-bold'>You Payment : ${data.price}</p>
          
        </div>
        </div>
        <div class="card px-12 w-[50%] bg-base-100 shadow-xl">
        <div class="card-body">
        <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
        </Elements>
        </div>
        </div>
       </>
    );
};

export default Payment;