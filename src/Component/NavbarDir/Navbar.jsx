import React, { useEffect, useState } from 'react';
import './navbar_style.css';
import LOGOWithName from '../../Images/logo_with_name.png';
import { Link, useLocation } from 'react-router-dom';
import isMobileScreen from '../../utils/screen_resolution';

const Navbar = () => {

  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPath(location.pathname);
    
  }, [location.pathname]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  }


  const handleClickRoute = () => {
    setIsMenuOpen(false);
  }


  return (
    <div style={ isMenuOpen ? {height:'230px'} : {}} className='navbar-master-div' >

      <div style={ isMenuOpen ? {display:'flex', flexDirection:'column'} : {} } className='navbar-container'>

        <div  className='navbar-logo-div'>
          <Link onClick={handleClickRoute} to="/">
            <img src={LOGOWithName} width='200px' alt='logo' />
          </Link>
        </div>


        <div style={isMenuOpen === true ? {display : 'block', paddingLeft:'35px', textAlign:'center', width:'100%' } : {}} className='navbar-options-div' >
          <div>
            <Link style={{color: currentPath === '/' ? 'palevioletred' :  ''}} onClick={handleClickRoute} to="/">Home</Link>
          </div>
          {/* <div>
            <Link onClick={handleClickRoute} to="/project">Projects</Link>
          </div> */}
          {/* <div>
            <Link to="/gallery">Gallery</Link>
          </div> */}
          <div>
            <Link style={{color: currentPath === '/team' ? 'palevioletred' :  ''}} onClick={handleClickRoute} to="/team">Team</Link>
          </div>
          <div>
            <Link style={{color: currentPath === '/contact' ? 'palevioletred' :  ''}} onClick={handleClickRoute} to="/contact">Contact Us</Link>
          </div>
          <div>
          <Link style={{color: currentPath === '/about' ? 'palevioletred' :  '' }} onClick={handleClickRoute} to="/about">About Us</Link>
          </div>
        </div>

      <div style={isMenuOpen ? { marginBottom : '10px', display:'flex', justifyContent:'center', width:'100%', marginTop:'10px' }:{}} className='mobile-menu-div' onClick={handleClickMenu}>
          {
            isMenuOpen === true ? 
            <i class="fa fa-times" aria-hidden="true"></i> : 
            <i  class="fa fa-bars" aria-hidden="true"></i>
          }
        </div>



      </div>

    </div>
  );
};

export default Navbar;
