import React from 'react';
import { toast } from 'react-toastify';

const User = ({user ,index,refetch}) => {

    const handleMakeAdmin=()=>{
        fetch(`https://infinite-brook-24824.herokuapp.com/user/admin/${user.email}`,{
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
          <td>{user.role!=="admin"&&<button onClick={handleMakeAdmin} className="btn btn-xs">Make Admin</button>}</td>
          <td><button className="btn btn-xs">Remove Admin</button></td>
        </tr>
    );
};

export default User;