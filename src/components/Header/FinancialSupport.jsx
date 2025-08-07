import React from 'react';
import styles from './FinancialSupport.module.css'

import img from '../../assets/img/FinancialSupport.png'
import DepositBtn from '../Buttons/DepositBtn';

const FinancialSupport = () => {
    return (
        <div className='col col-12 col-lg-3 mt-3'>
            <div className={`${styles.section} rounded row py-4 py-lg-5`}>
                {/* circle */}
                <div className='col col-6 col-lg-12 d-flex align-items-center'>
                    <div className={`${styles.img} position-relative w-100 rounded-circle mx-auto overflow-hidden bg-opacity-75 d-flex justify-content-center`}>
                        <div></div> 
                        <img src={img} alt="FinancialSupport" className='rounded-circle p-2' />
                    </div>
                </div>

                {/* title and botton */}
                <div className='col col-6 col-lg-12 d-flex align-items-center mt-0 mt-lg-5'>
                    <div className='d-flex align-items-center flex-column mx-auto px-4'>
                        <p className='fw-bold fs-5 text-center text-white'>موسسه خیریه توانبخشی حضرت علی اکبر (ع)</p>
                        <DepositBtn title='حمایت مالی' link='#' />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default FinancialSupport;
