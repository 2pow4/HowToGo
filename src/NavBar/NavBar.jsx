import React from 'react';
import './navbar.css';
import Logo_1 from '../../asset/logo/howtogo-1.png';
import Logo_2x from '../../asset/logo/howtogo-1@2x.png';
import Logo_3x from '../../asset/logo/howtogo-1@3x.png';

const NavBar = () => {
  return (
    <div id='navbar'>
      <div className='layout-horizontal-space'>
      <div>
      <a href='/home' className='logo'>
        <img
          src={Logo_1}
          alt={"logo"}
          srcSet={`${Logo_2x} 2x, ${Logo_3x} 3x`}
          className="howtogo1"
        />
      </a>
      </div>
      <div className='layout-vertical-center'>
        <i className="fas fa-info-circle info info-icon info-content"></i>
        <div className="info info-text info-content">who we are?</div>
      </div>
      </div>
    </div>
  )
}

export default NavBar;