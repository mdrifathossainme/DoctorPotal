import React, { useEffect } from 'react';
import { useSignInWithGoogle,useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../hooks/useToken';


const Login = () => {
const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
const [signInWithEmailAndPassword,user,epLoading,epError] = useSignInWithEmailAndPassword(auth);
const { register, formState: { errors }, handleSubmit } = useForm();
const navigate=useNavigate();
const location=useLocation()
const from= location.state?.from?.pathname||"/"


const [token]=useToken(user||gUser)


useEffect(()=>{
   if(token){
      navigate(from , {replace:true})
   }

},[token,from,navigate])


let singinError;
if(epError || gError){
   singinError=<p className='mb-2 text-red-700 font-bold '>{epError?.message||gError?.message}</p>

}





const onSubmit = (data) => {

   signInWithEmailAndPassword(data.email,data.password)


};


return (
<div className='flex h-screen items-center justify-center'>
   <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
         <h2 className="text-center text-2xl font-bold">Login</h2>
         <form onSubmit={handleSubmit(onSubmit)}>
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
                  message: 'Password Must be used 7 character ' // JS only: <p>error message</p> TS only support string
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
            <p className='mt-2'>New to Doctors Portal?<Link  className='text-secondary' to="/signup"> Create new account</Link></p>
         </form>
         <div className="divider">OR</div>
         <button className="btn btn-outline" onClick={()=>signInWithGoogle()}>CONTINUE WITH GOOGLE</button>
      </div>
   </div>
</div>
);
};
export default Login;