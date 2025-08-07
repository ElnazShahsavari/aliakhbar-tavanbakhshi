import React from 'react';
import styles from './DepositBox.module.css';
import BankCard from './BankCard';
import DepositBtn from '../Buttons/DepositBtn';

import items from '../../assets/information/bankCarts';
import img from '../../assets/img/deposit.png';

// باکس برای نشان دادن شماره کارت برای واریز فطریه و غیره
const DepositBox = () => {
    return (
        <div className={`row position-relative mt-5 w-100 align-items-stretch`}>

            {/* right box */}
            <div className='col col-12 col-md-8 col-lg-9'>
                <div className={`${styles.rightBox} position-relative my-bg-green w-100 h-100 p-3 pb-4 rounded-3 d-flex flex-column justify-content-between`}>
                    <img src={img} alt="" className='object-fit-cover h-100 end-0 top-0 position-absolute opacity-50 rounded-3' />
                    <h4 className='text-white text-center my-2 fw-bolder'>شماره کارت های موسسه خیریه توانبخشی حضرت علی اکبر (ع)</h4>

                    {/* bank card number */}
                    <div className='row row-cols-2 row-cols-lg-3 row-cols-xxl-5 justify-content-center'>
                        {items.map((item, index) => (
                            <div className='col mt-3' key={index}>
                                <BankCard item={item} />
                            </div>
                        ))}
                    </div>

                    {/*  */}
                    <div className={`${styles.rightDot1} d-none d-md-block`}></div>
                    <div className={`${styles.rightDot2} d-md-none`}></div>

                </div>
            </div>

            {/* left box */}
            <div className='col col-12 col-md-4 col-lg-3'>
                <div className={`${styles.leftBox} position-relative my-bg-green w-100 h-100 rounded-3 pt-2 px-2 mt-4 mt-md-0`}>
                    <div className='d-flex flex-column justify-content-center mx-3 py-md-2 py-3 pt-md-0 px-4 px-md-0 h-100'>
                        <DepositBtn title='واریز کفاره' customClass='my-2 mx-2 py-2'/>
                        <DepositBtn title='واریز فطریه' customClass='my-2 mx-2 py-2' />
                        <DepositBtn title='واریز صدقه' customClass='my-2 mx-2 py-2' />
                    </div>

                    {/*  */}
                    <div className={`${styles.leftDot1} d-none d-md-block`}></div>
                    <div className={`${styles.leftDot2} d-md-none`}></div>
                </div>
            </div>
        </div>
    );
}

export default DepositBox;
