import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import SingleDocto from './singleDocto';

const ManegDoctor = () => {
    const {data:doctors ,isLoading,refetch}=useQuery('doctor', ()=>fetch('http://localhost:5000/doctor',{
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
    {doctors.map((dt , index)=><SingleDocto key={index} dt={dt} index={index} refetch={refetch} />)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManegDoctor;