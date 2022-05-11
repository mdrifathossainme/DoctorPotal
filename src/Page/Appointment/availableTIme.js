import { setDayOfYear } from 'date-fns';
import React from 'react';
import PraimayBtn from '../Shared/PraimayBtn';

const AvailableTIme = ({timeAvailable,setOpneModal}) => {
    const {nam,slote}=timeAvailable;
 

    return (
        <div  className="  card lg:w-lg bg-base-100 shadow-xl">
  <div  className="  card-body">
    <h2  className="  card-title justify-center text-secondary font-semibold ">{timeAvailable.name}</h2>
    <span>
    <p className='text-center font-semibold'>{slote.length>1? <span>
        {slote[0]}
    </span>: <span className='text-red-500'>
    Try to Anoter Day
    </span> }</p>
    <p className='text-center'>{slote.length}  {slote.length>1? "SPACES ":"SPACE"} AVAILABLE</p>
    </span>
    <div  className="  card-actions justify-center">
    <label  disabled={slote.length===0 } onClick={()=>setOpneModal(timeAvailable)} for="booingModal"  className="  mt-8 btn bg-gradient-to-r from-secondary to-primary text-white upparc">Book Appointment</label>
    </div>
  </div>
</div>
    );
};

export default AvailableTIme ;