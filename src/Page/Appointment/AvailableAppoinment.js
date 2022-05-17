import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AvailableTIme from './availableTIme';
import Modal from './Modal';

const AvailableAppoinment = ({date}) => {
    const [opneModal,setOpneModal]=useState(null)

    const formattedDate=format(date,"PP")
   
    const {data:timeAvailable, isLoading ,refetch}=useQuery(["available",formattedDate],()=>
    fetch(`https://infinite-brook-24824.herokuapp.com/available/?date=${formattedDate}`)
        .then(res=>res.json()))


        if(isLoading){
            return<Loading/>
        }
    return (
        <>       
             <h4 className='text-center text-secondary font-semibold'>Available Appointments on {format(date,"PP")}</h4>
             <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-8'>
                 {
                     timeAvailable?.map(at=><AvailableTIme setOpneModal={setOpneModal} key={at._id} timeAvailable={at}></AvailableTIme>)
                 }
             </div>
             {
                 opneModal&&<Modal 
                 date={date} 
                 refetch={refetch} 
                 opneModal={opneModal} 
                 setOpneModal={setOpneModal}
                 
                 >
                 </Modal>
             }
        </>
    );
};

export default AvailableAppoinment;