import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const useAdmin = user => {
   const [admin,setAdmin]=useState(false)
   const [adminLoading,setAdminLoing]=useState(true)
   useEffect(()=>{
    const email=user.email;
    if(email){
     fetch(`http://localhost:5000/admin/${email}`,{
         method:"GET",
         headers:{
             'authorization':`Bearer ${localStorage.getItem('accessToken')}`
         }
     })
     .then(res=> res.json())
     .then(data=> {
         setAdmin(data.admin)    
        setAdminLoing(false)}
     )

        }
    
   },[user])
   return [admin,adminLoading]
}

export default useAdmin;