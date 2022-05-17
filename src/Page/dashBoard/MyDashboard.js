import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { get } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
        const MyDashboard = () => {
        const [user]=useAuthState(auth)
        const [appointment,setAppointment]=useState([])
        const navigate=useNavigate()

                useEffect(()=>{
                fetch(`https://infinite-brook-24824.herokuapp.com/booking?patient=${user.email}`,{
                    method:"GET",
                    headers:{
                        "authorization":`Bearer ${localStorage.getItem('accessToken')}`
                    }
                }
                )
                .then(res=>{
                    if(res.status===401 ||res.status===403){
                        signOut(auth);
                     localStorage.removeItem('accessToken')
                        navigate('/');

                    }
                   
                 return res.json()
                })
                .then(data=>setAppointment(data))
                } ,[])
        return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {appointment.map((a,index)=> <tr key={index}>
                            <th>{index+1}</th>
                            <th>{a.patientNanme}</th>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            
                        </tr>)}
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
        );
        };
export default MyDashboard;