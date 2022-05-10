
import { Route, Routes } from 'react-router-dom';
import Navbar from './Page/Shared/Navbar'
import Home from './Page/Home/Home'
import About from './Page/About/About'
import Appointment from './Page/Appointment/Appointment'
import Reviews from './Page/Reviews/Reviews'
import ContactUs from './Page/ContactUs/ContactUs'
import Login from './Page/Login/Login'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route >
      <Route path="/home" element={<Home/>}></Route >
      <Route path="/about" element={<About/>}></Route >
      <Route path="/appointmentt" element={<Appointment/>}></Route >
      <Route path="/reviews" element={<Reviews/>}></Route >
      <Route path="/contactus" element={<ContactUs/>}></Route >
      <Route path="/login" element={<Login/>}></Route >
      <Route path="*" element={<About/>}></Route >
    </Routes>
    </>
  );
}

export default App;