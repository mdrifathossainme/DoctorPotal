import React from 'react';
import img from '../../assets/images/footer.png'
const Footer = () => {
    return (
       <>
       <footer style={{background:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center"}}  className="  footer pt-16 px-12">
  <div>
    <span  className="  footer-title">Services</span> 
    <a  className="  link link-hover">Branding</a> 
    <a  className="  link link-hover">Design</a> 
    <a  className="  link link-hover">Marketing</a> 
    <a  className="  link link-hover">Advertisement</a>
  </div> 
  <div>
    <span  className="  footer-title">Company</span> 
    <a  className="  link link-hover">About us</a> 
    <a  className="  link link-hover">Contact</a> 
    <a  className="  link link-hover">Jobs</a> 
    <a  className="  link link-hover">Press kit</a>
  </div> 
  <div>
    <span  className="  footer-title">Legal</span> 
    <a  className="  link link-hover">Terms of use</a> 
    <a  className="  link link-hover">Privacy policy</a> 
    <a  className="  link link-hover">Cookie policy</a>
  </div>
    </footer> 
        <footer className='py-12'>
            <p className='text-center'>Copyright &copy;	 {(new Date().getFullYear())} All Rights Reserved</p>
        </footer>
  </>
    );
};

export default Footer;