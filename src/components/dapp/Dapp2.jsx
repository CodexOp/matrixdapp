import React from 'react'
import './dapp.scss'


const Dapp2 = () => {
  return (
    
    <div className='dapp2'>
        <div className='airdrop_container'>
            <div className='token_info'>
                <p>Token Address</p>
                <div>
                    <p>0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5</p>
                    <p>Not Correct ? <span className='green'>Change It </span></p>
                </div>
            </div>

            <div className='manual_addresses'>
                <div className='left_receiptent'>
                    <div>
                        <label>Recipient Address</label>
                    </div>
                    <div>
                        <textarea rows="4" cols="100" placeholder='One Address In Each Line' className='textarea'/>
                    </div>
                </div>
                <div className='right_amount'>
                <div>
                        <label>Airdrop Amount</label>
                    </div>
                    <div>
                        <textarea rows="4" cols="100" placeholder='Amount In Each Line Correspond to Address' className='textarea'/>
                    </div>
                </div>
            </div>
            <div className='choose_option'>
            <div>
                        <label>Choose An CSV/Excel File </label>
                    </div>
                    <div>
                        <input placeholder='Select CSV File' type="file" className='textarea chosefile'/>
                    </div>
            </div>

            <div className='alert_box'>
                <p>You Can Put Address and amount directly OR you can upload a CSV File with address & amount column</p>
            </div>

            <div className='button_section'>
                <button >Airdrop</button>
                <p>Airdrop Fee : 0.2 BNB</p>
            </div>
        </div>
        <div className='holders'>
            <h2 className='holder_heading'>Top 10 token holders data</h2>
            <div className='table'>
            <div className='row_outer'>
             <div className='head_row row'>
                <p>Rank</p>
                <p>ADDRESSES</p>
                <p>QUANTITY</p>
                <p>PERCENTAGE</p>
             </div>
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
             <div className='row'>
                <p>1</p>
                <p>0xdaa3b5ae0521264e55f45157eb6e158e1f3e5012</p>
                <p>437294505716.577557919</p>
                <p>45%</p>
             </div>
            <hr />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Dapp2