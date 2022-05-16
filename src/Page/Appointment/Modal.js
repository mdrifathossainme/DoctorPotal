import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Modal = ({opneModal,date,setOpneModal,refetch}) => {
    const {_id,name, slots}=opneModal

const [user]=useAuthState(auth)

const formattedDate=format(date,"PP")

const handleSubmit=(e)=>{
        e.preventDefault()
        const slot= e.target.time.value

        const booking={
            treatment:_id,
            treatment:name,
            date:formattedDate,
            slot,
            patient:user.email,
            patientNanme:user.displayName,
            phone:e.target.number.value


        }
    const url='http://localhost:5000/booking'
        fetch(url,{
            method:"POST",
            headers:{
               "content-type":"application/json"
            },body:JSON.stringify(booking)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                toast(`Appointment is set, ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
            }
            refetch();
        setOpneModal(null)

        })

    
        
}





    return (
        <>
       
       <input type="checkbox" id="booingModal"  className="  modal-toggle" />
        <div  className="  modal modal-bottom sm:modal-middle">
      <div  className="  modal-box">
      <label  htmlFor="booingModal"  className="  btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       <h3  className="   text-lg text-secondary text-2xl font-bold">Booking Service: {name}</h3>

       <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-6'>
                <input disabled readOnly value={format(date,"PP")}  className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="text"  name="" id="" />
                <select name='time'  className="  select select-bordered" >
                    {
                        slots.map((s,i)=><option key={i} value={s}>{s}</option>)
                    }

                    
               </select>
                <input placeholder="Your Name" value={user?.displayName} readOnly disabled className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="text" name="name" id="" />
                <input placeholder="Your Email" value={user?.email}  readOnly disabled className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="email" name="email" id="" />
                <input placeholder="Your Number" className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="number" name="number" id="" />

                <input  type="submit" value="BookIng" className='btn btn-secondary text-white' />
            </form>
         </div>
        </div>
        </>
    );
};

export default Modal;