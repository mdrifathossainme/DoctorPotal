import { format } from 'date-fns';
import React from 'react';

const Modal = ({opneModal,date,setOpneModal}) => {
    const {name, slote}=opneModal

const handleSubmit=(e)=>{
        e.preventDefault()
        const time= e.target.time.value
        console.log(name ,time)
        setOpneModal(null)
        
}





    return (
        <>
       
       <input type="checkbox" id="booingModal"  className="  modal-toggle" />
        <div  className="  modal modal-bottom sm:modal-middle">
      <div  className="  modal-box">
      <label for="booingModal"  className="  btn btn-sm btn-circle absolute right-2 top-2">✕</label>
       <h3  className="   text-lg text-secondary text-2xl font-bold">Booking Service: {name}</h3>

       <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-4 mt-6'>
                <input disabled readOnly value={format(date,"PP")}  className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="text"  name="" id="" />
                <select name='time'  className="  select select-bordered" >
                    {
                        slote.map(s=><option value={s}>{s}</option>)
                    }

                    
               </select>
                <input placeholder="Your Name" className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="text" name="name" id="" />
                <input placeholder="Your Email"  className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="email" name="email" id="" />
                <input placeholder="Your Number" className='border-solid border-2 border-gray-300 rounded h-12 px-3' type="number" name="number" id="" />

                <input  type="submit" value="BookIng" className='btn btn-secondary text-white' />
            </form>
         </div>
        </div>
        </>
    );
};

export default Modal;