
import { Route, Routes } from 'react-router-dom';
import Navbar from './Page/Shared/Navbar'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Appointment from './Page/Appointment/Appointment'
import Reviews from './Page/Reviews/Reviews'
import ContactUs from './Page/ContactUs/ContactUs'
import Login from './Page/Login/Login'
import SignUp from './Page/SIgnUp/SignUp';
import RequirAuth from './Page/Login/RequirAuth';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyDashboard from './Page/dashBoard/MyDashboard';
import DashBoard from './Page/dashBoard/dashBoard';
import Review from './Page/dashBoard/Review';
import AllUser from './Page/AllUser/AllUser';
function App() {
  return (
    <div className='max-w-7xl  mx-auto'>
    <Navbar/>
    <ToastContainer/>
    <Routes>
      <Route path="/" element={<Home/>}></Route >
      <Route path="/home" element={<Home/>}></Route >
      <Route path="/about" element={<About/>}></Route >
      <Route path="/appointment" element={

        <RequirAuth>
          <Appointment/>
        </RequirAuth>
      }></Route >
      <Route path="/dashboard" element={

        <RequirAuth>
          <DashBoard/>
        </RequirAuth>
        
      }>
        <Route index element={<MyDashboard/>}/>
         <Route path='rewi' element={<Review/>}/>
         <Route path='alluser' element={<AllUser/>}/>
      </Route >
      <Route path="/reviews" element={<Reviews/>}></Route >
      <Route path="/contactus" element={<ContactUs/>}></Route >
      <Route path="/login" element={<Login/>}></Route >
      <Route path="/signup" element={<SignUp/>}></Route >
      <Route path="*" element={<About/>}></Route >
    </Routes>
                 
    </div>
  );
}

export default App;
