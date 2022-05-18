import { setDayOfYear } from 'date-fns';
import React from 'react';
import PraimayBtn from '../Shared/PraimayBtn';

const AvailableTIme = ({timeAvailable,setOpneModal}) => {
    const {name,slots,price}=timeAvailable;
 

    return (
        <div  className="  card lg:w-lg bg-base-100 shadow-xl">
  <div  className="  card-body">
    <h2  className="  card-title justify-center text-secondary font-semibold ">{timeAvailable.name}</h2>
    <span>
    <p className='text-center font-semibold'>{slots.length>1? <span>
        {slots[0]}
    </span>: <span className='text-red-500'>
    Try to Anoter Day
    </span> }</p>
    <p className='text-center'>{slots.length}  {slots.length>1? "SPACES ":"SPACE"} AVAILABLE</p>
    <p className='text-center'>Price: ${price}</p>
    </span>
    <div  className="  card-actions justify-center">
    <label  disabled={slots.length===0 } onClick={()=>setOpneModal(timeAvailable)}  htmlFor="booingModal"  className="  mt-8 btn bg-gradient-to-r from-secondary to-primary text-white upparc">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AvailableTIme ;