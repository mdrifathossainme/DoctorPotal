import React from 'react';
import { useSignInWithGoogle, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { async } from '@firebase/util';
const SignUp = () => {
    const navigate=useNavigate()
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, uperror] = useUpdateProfile(auth);
const { register, formState: { errors }, handleSubmit } = useForm();



if( gLoading||loading){
   return <Loading/>
}
let singinError;
if(loading || gError){
   singinError=<p className='mb-2 text-red-700 font-bold '>{loading?.message||gError?.message}</p>
}

console.log(user,gError)
const onSubmit = async(data) => {

    await createUserWithEmailAndPassword(data.email,data.password)
    await updateProfile({displayName:data.name})
    navigate("/appointment")

};
    return (
        <div className='flex h-screen items-center justify-center'>
   <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
         <h2 className="text-center text-2xl font-bold">Sign Up</h2>
         <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
               <label className="label">
               <span className="label-text">Your Name</span>
               </label>
               <input {...register("name", {
               required:{
               value:true,
               message:"Nameis Reqired"
               }
               })} type="text" placeholder="Enter Yout Name" className="input input-bordered w-full max-w-xs" />
               <label className="label">
             
               {errors.name?.type === 'required' &&  <span className="label-text-alt font-bold text-red-700">{errors.name.message}</span>}

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
               <span className="label-text">Password</span>
               </label>
               <input {...register("password", {
               required:{
               value:true,
               message:"Password is Reqired"
               },
               minLength: {
                  value: 7,
                  message: 'Password Must be used 7 character ' 
                }, maxLength : {
                  value: 7,
                  message: 'Password Must be used 7 character '
                }
               })} type="password" placeholder="Enter Yout Password" className="input input-bordered w-full max-w-xs" />
               <label className="label">
             
               {errors.password?.type === 'required' &&  <span className="label-text-alt font-bold text-red-700">{errors.password.message}</span>}
               {errors.password?.type === 'minLength' &&  <span className="label-text-alt font-bold  capitalize text-red-700">{errors.password.message}</span>}
               {errors.password?.type === 'maxLength' &&  <span className="label-text-alt font-bold  capitalize text-red-700">{errors.password.message}</span>}

               </label>

               
            </div>
            {singinError}
            <input type="submit" value="Login"  className='btn  w-full max-w-xs '/>
            <p className='mt-2'>I have AL Ready Account<Link className='text-secondary' to="/login"> Login</Link></p>
         </form>
         <div className="divider">OR</div>
         <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
      </div>
   </div>
</div>
    );
};

export default SignUp;