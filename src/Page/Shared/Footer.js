import React from 'react';
import img from '../../assets/images/footer.png'
const Footer = () => {
    return (
       <>
       <footer style={{background:`url(${img})`,backgroundSize:"cover",backgroundPosition:"center"}} class="footer pt-16 px-12">
  <div>
    <span class="footer-title">Services</span> 
    <a class="link link-hover">Branding</a> 
    <a class="link link-hover">Design</a> 
    <a class="link link-hover">Marketing</a> 
    <a class="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span class="footer-title">Company</span> 
    <a class="link link-hover">About us</a> 
    <a class="link link-hover">Contact</a> 
    <a class="link link-hover">Jobs</a> 
    <a class="link link-hover">Press kit</a>
  </div> 
  <div>
    <span class="footer-title">Legal</span> 
    <a class="link link-hover">Terms of use</a> 
    <a class="link link-hover">Privacy policy</a> 
    <a class="link link-hover">Cookie policy</a>
  </div>
    </footer> 
        <footer className='py-12'>
            <p className='text-center'>Copyright &copy;	 {(new Date().getFullYear())} All Rights Reserved</p>
        </footer>
  </>
    );
};

export default Footer;