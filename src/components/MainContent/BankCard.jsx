import React from 'react';
import styles from './BankCard.module.css';

import bgImg from '../../assets/img/depositCard.png';

// نام و شماره کارت
const BankCard = ({item}) => {
    return (
        <div className={`${styles.card} position-relative bg-white rounded-3 d-flex flex-column px-2 py-1 pt-2`}>
            <img src={bgImg} alt="" className=' position-absolute start-0 h-100 opacity-25'/>
            <span className='pb-1 fw-bold'>{item.name}</span>
            <span className='my-green fw-bold text-break'>{item.cardNumber}</span>            
        </div>
    );
}

export default BankCard;
