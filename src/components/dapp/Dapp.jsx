import React from 'react';
import './dapp.scss'

const Dapp = () => {
  return (
    <div className='dapp_outer'>
        <div>
        <label className='tokenaddress'>Token Address</label>
        </div>
        <div>
        <input placeholder='Paste The Contract Address' className='addressinput'/>
        </div>
        <label className='airdropfee green'>Airdrop Fee : 0.2 BNB</label>
        <div className='table'>
            <div className='row_outer'>
            <div className='row'>
                <p>Token Name</p>
                <p>SafeMoonV2.0</p>
            </div>
            <hr className="line_table"/>
            </div>
            <div className='row_outer'>
            <div className='row'>
                <p>Token Name</p>
                <p>SafeMoonV2.0</p>
            </div>
            <hr className="line_table"/>
            </div>
            <div className='row_outer'>
            <div className='row'>
                <p>Token Name</p>
                <p>SafeMoonV2.0</p>
            </div>
            <hr className="line_table"/>
            </div>
            <div className='row_outer'>
            <div className='row'>
                <p>Token Name</p>
                <p>SafeMoonV2.0</p>
            </div>
            <hr className="line_table"/>
            </div>
            <div className='row_outer'>
            <div className='row'>
                <p>Token Name</p>
                <p>SafeMoonV2.0</p>
            </div>
            <hr className="line_table"/>
            </div>
           
        </div>
        <div className='next_button'>
       <a href="step2"> <button className='next'>Next</button></a>
        </div>
    </div>
  )
}

export default Dapp