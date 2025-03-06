import React, { useState } from 'react';
import './footerStyle.css';
import LOGO from '../../Images/MEENAS.png';
import LOGOWithName from '../../Images/logo_with_name.png';
import qrImage from '../../Images/qr.png';


const Footer = () => {
  return (
    <div className='footer-main' >
        <div className='footer-container'>

          <div className='footer-container-1'>
            <div className='container-1-child-1'>
              <img src={LOGOWithName} width='250px' alt='logo' />
              {/* <sapn style={{marginLeft:'20px', fontWeight:'700', fontSize:'18px', textTransform: 'uppercase'}} >Meenos Health Care</sapn> */}
            </div>
            <div className='container-1-child-2'>
              <p  >A compassionate NGO dedicated to creating a positive impact by supporting and empowering communities in need. Join our journey to bring positive change</p>
            </div>
            {/* <div className='container-1-child-3'>
            <i class="fab fa-facebook" aria-hidden="true"></i>
            <i class="fab fa-linkedin" aria-hidden="true"></i>
            <i class="fab fa-youtube" aria-hidden="true"></i>
            <i class="fab fa-instagram" aria-hidden="true"></i>
            <i class="fab fa-whatsapp" aria-hidden="true"></i>
            </div> */}
            <div className='container-1-child-4'>
              <div className='qr-code-div' >
                <img src={qrImage} width='90%' alt='qr code' /> 
              </div>
              <div className='acc-details-div' >
                <b>Name</b>
                <p>Daanpatra Foundation</p>

                <b>Account Number</b>
                <p>076288700000243</p>

                <b>IFSC</b>
                <p>YESB0000762</p>

                <b>Branch</b>
                <p>Vijay Nagar , Indore</p>
              </div>
            </div>
          </div>
          <div className='footer-container-2'>
            <b>ABOUT US</b>

            
            <div>
            <p>
            Meenas health care ( a non-profit organisation) has been dedicated to help those people or communities, belongs to weaker section of the society. Here every action counts towards building a better tomorrow. Our organisation and team members is highly dedicated to make a positive impact on the society. Till now we have served many lives.
            </p>
            </div>

          </div>
          <div className='footer-container-3'>
            <b>CONTACT US</b>

       
              <div>
                <b>Address:</b>
                <p>B-47,Street no.4 sachiwalay colony Kankarbagh patna bihar 800020</p>

                <b>Contact Number:</b>
                <p>+91 6376607351 / +91 6200-517930</p>

                <b>Email:</b>
                <p>Meenashealthcare@gmail.com</p>
                
              </div>

                
       

          </div>
          {/* <div className='footer-container-4'>
            <b>4rth container</b>
          </div> */}

        </div>
    </div>
  )
}

export default Footer;