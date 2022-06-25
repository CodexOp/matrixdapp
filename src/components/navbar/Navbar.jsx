import React from 'react';
import './navbar.scss'
import logo from '../../images/logo.png'
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <div className='navbar_outer'>
    <div className="navbar_container">
        <div className='left_navbar'>
          <img src={logo} alt="logo" />
          <div className='logotext'>
            MATRIX LABS
          </div>
          </div>
        <div  className='right_navbar'>
            <button className='website'>Website</button>
            <div className='connect'><ConnectButton /></div>
            </div>
         
        </div>
    </div>
  )
}

export default Navbar