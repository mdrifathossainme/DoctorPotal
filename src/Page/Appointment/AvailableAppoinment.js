import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AvailableTIme from './availableTIme';
import Modal from './Modal';

const AvailableAppoinment = ({date}) => {
    const [timeAvailable,setTimeAvailable]=useState([])
    const [opneModal,setOpneModal]=useState(null)

    useEffect(()=>{
        fetch('avaiavletime.json')
        .then(res=>res.json())
        .then(data=>setTimeAvailable(data))
    }, [])
    return (
        <>       
             <h4 className='text-center text-secondary font-semibold'>Available Appointments on {format(date,"PP")}</h4>
             <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                 {
                     timeAvailable.map(at=><AvailableTIme setOpneModal={setOpneModal} key={at._id} timeAvailable={at}></AvailableTIme>)
                 }
             </div>
             {
                 opneModal&&<Modal date={date} opneModal={opneModal} setOpneModal={setOpneModal}></Modal>
             }
        </>
    );
};

export default AvailableAppoinment;