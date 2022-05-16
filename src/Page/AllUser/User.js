import React from 'react';
import { toast } from 'react-toastify';

const User = ({user ,index,refetch}) => {

    const handleMakeAdmin=()=>{
        fetch(`http://localhost:5000/user/admin/${user.email}`,{
            method:"PUT",
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>{
            if(res.status===403){
                toast.error('halar put age admin ho')
            }
            return res.json()})
        .then(data=>{
          if(data.modifiedCount>0){
            console.log(data)
            toast.success('Success')
            refetch()
          }
        })
    
    }
    return (
        <tr>
        <th>{index+1}</th>
          <td>{user.email}</td>
          <td>{user.role!=="admin"&&<button onClick={handleMakeAdmin} class="btn btn-xs">Make Admin</button>}</td>
          <td><button class="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default User;