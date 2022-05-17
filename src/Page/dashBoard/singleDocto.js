import React from 'react';
import { toast } from 'react-toastify';


const SingleDocto = ({dt,refetch,index}) => {
            const {img,name,specialty ,email}=dt;

            const handleDoctorDeleted=(email)=>{
                console.log(email)
            fetch(`https://infinite-brook-24824.herokuapp.com/doctor/${email}`,{
            method:'DELETE',
            headers:{
            "authorization":`Bearer ${localStorage.getItem('accessToken')}`
            },
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount){
                    toast.success('delete complate')
                    refetch()
                }
            })
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
            <td><button onClick={()=>handleDoctorDeleted(email)} className="btn btn-error btn-sm">Removed</button></td>
            </tr>
            );
            };
export default SingleDocto;