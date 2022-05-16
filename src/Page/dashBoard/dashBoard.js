import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const DashBoard = () => {
  const [user]=useAuthState(auth)
  const [admin]=useAdmin(user)
 
    return (
        <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
        <Outlet/>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          
          <li><Link to="/dashboard">My Dashboard</Link></li>
            <li><Link to="/dashboard/rewi">Review</Link></li>
           {
             admin&& <li><Link to="/dashboard/alluser">All User</Link></li>
           }
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;