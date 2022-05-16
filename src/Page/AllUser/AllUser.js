import userEvent from '@testing-library/user-event';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const AllUser = () => {

const {data:allUser , isLoading ,refetch}=useQuery('user',()=> fetch('http://localhost:5000/user',{
    method:'GET',
    headers:{
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    }
}).then(res=>res.json()))
if(isLoading){
    return(<Loading/>)
}

    return (
<div class="overflow-x-auto">
  <table class="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
         {allUser.map((user,index)=> <User refetch={refetch} user={user} key={index} index={index} />)}
    </tbody>
  </table>
</div>
    
    );
};

export default AllUser;
