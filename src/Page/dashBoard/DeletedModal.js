import React from 'react';
import { toast } from 'react-toastify';

const DeletedModal = ({deleted,refetch,setDeleted}) => {


    const handleDoctorDeleted=()=>{
    
    fetch(`https://infinite-brook-24824.herokuapp.com/doctor/${deleted.email}`,{
    method:'DELETE',
    headers:{
    "authorization":`Bearer ${localStorage.getItem('accessToken')}`
    },
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.deletedCount){
            setDeleted(null)
            toast.success('delete complate')
            refetch()
        }
    })
    }
    return (
       <>
       
        
        <input type="checkbox" id="deletedConfirmModal" className="modal-toggle" />

       <div className="modal modal-bottom sm:modal-middle">
         <div className="modal-box">
           <h3 className="font-bold text-lg text-red-500"> Are sure You Deleted{deleted.name}? </h3>
           <p className="py-4 ">{deleted.specialty}</p>
        
           <div className="modal-action">
           <button onClick={handleDoctorDeleted} className="btn btn-error ">Deleted</button>
             <label htmlFor="deletedConfirmModal" className="btn">Cencle</label>
           </div>
         </div>
       </div>
       
       </>
       
    );
};

export default DeletedModal;