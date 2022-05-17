import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeletedModal from './DeletedModal';
import SingleDocto from './singleDocto';

const ManegDoctor = () => {
  const [deleted,setDeleted]=useState(null)
    const {data:doctors ,isLoading,refetch}=useQuery('doctor', ()=>fetch('https://infinite-brook-24824.herokuapp.com/doctor',{
        headers:{

            "authorization":`Bearer ${localStorage.getItem('accessToken')}`
         }
    }).then(res=>res.json()))

    

    if(isLoading){
        return <Loading/>
    }
    
    return (
        <div>
         
           <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th>No</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Specialty</th>
        <th>Removed</th>
      </tr>
    </thead>
    <tbody>
    {doctors.map((dt , index)=><SingleDocto key={index} setDeleted={setDeleted} dt={dt} index={index}  />)}
    </tbody>
  </table>
</div>
{
  deleted&&<DeletedModal refetch={refetch} deleted={deleted} setDeleted={setDeleted} ></DeletedModal>
}
        </div>
    );
};

export default ManegDoctor;