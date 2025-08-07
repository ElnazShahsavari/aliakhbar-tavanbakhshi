import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DepositBtn.module.css';

// دکمه زرد رنگ برای پرداخت
const DepositBtn = ({ title, icon=true , link , customClass }) => {
    return (
        <Link to={link} className={`btn ${styles.customBtn} px-3 py-1 fs-6 d-flex justify-content-between ${customClass}`}>
            <span>{title}</span>
            {icon && <i className="bi bi-arrow-left-circle pe-3"></i>}
        </Link>
    ); 
}

export default DepositBtn;
