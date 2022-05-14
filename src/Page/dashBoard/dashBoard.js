import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
    
 
    return (
        <div class="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col items-center justify-center">
        <Outlet/>
        
        </div> 
        <div class="drawer-side">
          <label for="sidebar" class="drawer-overlay"></label> 
          <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          
          <li><Link to="/dashboard">My Dashboard</Link></li>
            <li><Link to="/dashboard/rewi">Review</Link></li>
          </ul>
        
        </div>
      </div>
    );
};

export default DashBoard;