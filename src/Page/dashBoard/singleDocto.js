import React from 'react';
import { toast } from 'react-toastify';


const SingleDocto = ({dt,index, setDeleted}) => {
            const {img,name,specialty ,email}=dt;

          
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
            <td>
                <label onClick={()=>setDeleted(dt)} htmlFor="deletedConfirmModal" className="btn btn-error btn-sm modal-button">Removed</label>
                
                </td>
            </tr>
            );
            };
export default SingleDocto;