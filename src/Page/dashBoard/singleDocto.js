import React from 'react';

const SingleDocto = ({dt,refetch,index}) => {
    const {img,name,specialty ,email}=dt;
    const handleDoctorDeleted=(email)=>{
        console.log(email)

    }
    return (
        <tr>
        <th>{index+1}</th>
        <td>
            <div className="avatar">
                <div className="w-16 rounded">
                    <img src={img} alt="" />
                </div>
                </div>
        </td>
        <td>{name}</td>
        <td>{specialty}</td>
        <td><button onClick={()=>handleDoctorDeleted(email)} class="btn btn-error btn-sm">Removed</button></td>
      </tr>
      
    );
};

export default SingleDocto;