import React from 'react';
import styles from './contactNumber.module.css'

function ContactNumber() {
    return (
        <>
            <div className={`d-none d-lg-flex align-items-center text-center px-2 ${styles.section}`}>
                <div className={`${styles.num} d-flex flex-column ps-3`}>
                    <span className=' text-nowrap'>شماره تماس موسسه</span>
                    <span className='fw-medium' dir="ltr">(۰۵۶) ۳۲۲۵-۲۰۵۰</span>
                </div>
                <i className="bi bi-telephone my-green me-3"></i>
            </div>
        </>

    );
}

export default ContactNumber;
