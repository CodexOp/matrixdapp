import React from 'react';
import './landing.scss'

const Landing = () => {
  return (
    <div>
        <h2 className="heading">Airdrop Your <span className="green">$Token</span> With Precise Customization</h2>
        <p className="para_landing">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ullamco laboris nisi ut aliquip ex ea commodo</p>
        <div className='boxes_landing'>
            <div className='box'>
                <h2>Fast Execution</h2>
                <p className='green'>2-3 MIN</p>
            </div>
            <div className='box'>
                <h2>Fast Execution</h2>
                <p className='green'>2-3 MIN</p>
            </div>
            <div className='box'>
                <h2>Fast Execution</h2>
                <p className='green'>2-3 MIN</p>
            </div>
            <div className='box'>
                <h2>Fast Execution</h2>
                <p className='green'>2-3 MIN</p>
            </div>
        </div>
    </div>
  )
}

export default Landing