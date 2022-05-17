import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';




const AddDoctot = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
   const {data:service, isLoading}=useQuery("doctorservice", ()=>fetch('https://infinite-brook-24824.herokuapp.com/doctorservices').then(res=>res.json()))


   const imgApiKey="2e23ea39c13302f51994cfeea7fa6d4b"

   if(isLoading){
      return <Loading/>
   }

   


    const onSubmit = async(data) => {

     const image= data.img[0];
     const formData=new FormData();
     formData.append('image',image)


     const url= `https://api.imgbb.com/1/upload?key=${imgApiKey}`
     fetch(url,{
        method:"POST",
        body:formData,
     })
     .then(res=>res.json())
     .then(result=>{
        const img=result.data.url
       
        const doctor={
           name:data.dname,
           email:data.email,
           specialty:data.specialty,
           img:img

        }
        fetch('https://infinite-brook-24824.herokuapp.com/doctor',{
           method:"POST",
           headers:{
              'content-type':"application/json",
              "authorization":`Bearer ${localStorage.getItem('accessToken')}`
           },
           body:JSON.stringify(doctor)
        })
        .then(res=>res.json())
        .then(inserted=>{
           if(inserted.insertedId){
              toast.success('Doctor Add SuccessFul')
            reset()
           }else{
            toast.error('Doctor Add UnSuccessFul')

           }
        })
       
     })


    };
    return (
        <div className='flex h-screen items-center justify-center'>
         <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
               <h2 className="text-center text-2xl font-bold">Add New Doctor </h2>


               <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">

                     <label className="label">
                     <span className="label-text">Doctor Name</span>
                     </label>

                     <input {...register("dname", {
                     required:{
                     value:true,
                     message:"Name is Reqired"
                     }
                     })} type="text" placeholder="Doctor Name" className="input input-bordered w-full max-w-xs" />


                     <label className="label">
                     {errors.dname?.type === 'required' &&  <span className="label-text-alt font-bold text-red-700">{errors.dname.message}</span>}
                     </label>

                  </div>

                  <div className="form-control w-full max-w-xs">
                     <label className="label">
                     <span className="label-text">Email</span>
                     </label>
                     <input {...register("email", {
                     required:{
                     value:true,
                     message:"Email is Reqired"
                     },
                     pattern: {
                     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                     message: 'Must Be Used  Valid Email'
                     }
                     })} type="email" placeholder="Enter Yout Email" className="input input-bordered w-full max-w-xs" />
                     <label className="label">
                     {errors.email?.type === 'required' &&  <span className="label-text-alt font-bold text-red-700">{errors.email.message}</span>}
                     {errors.email?.type === 'pattern' &&  <span className="label-text-alt font-bold  text-red-700">{errors.email.message}</span>}
                     </label>
                  </div>

                  <div className="form-control w-full max-w-xs">
                     <label className="label">
                     <span className="label-text">Specialty</span>
                     </label>

                     <select {...register("specialty")} className="select w-full max-w-xs">
                     {service.map(sr=><option key={sr._id}>{sr.name}</option>)} 
                     </select>
                  </div>

                  <div className="form-control w-full max-w-xs">

                        <label className="label">
                        <span className="label-text">Upload Img</span>
                        </label>

                        <input {...register("img", {
                        required:{
                        value:true,
                        message:"Img is Reqired"
                        }
                        })} type="file"  className="input input-bordered w-full max-w-xs" />


                        <label className="label">
                        {errors.dname?.type === 'required' &&  <span className="label-text-alt font-bold text-red-700">{errors.dname.message}</span>}
                        </label>

                  </div>
                  <input type="submit" value="ADD"  className='mt-2 btn  w-full max-w-xs '/>
                
               </form>
               
            </div>
         </div>
      </div>
    );
};

export default AddDoctot;