import React from 'react';
import styles from './ImgDonor.module.css';
import ViewBtn from '../Buttons/ViewBtn';

const ImgDonor = ({ items }) => {
    return (
        <div className={`${styles.card} position-relative my-bg-green mb-2`}>
            <img
                src={items.src}
                alt={items.title}
                className={styles.image}
            />
            <div className={`bg-light position-absolute bottom-0 start-0 px-2 ${styles.btn}`}>
                <ViewBtn title={'مشاهده'} link='/'/>
            </div>
            <div className={`${styles.name} text-white`}>
                <p className='mb-1'>خیر گرانقدر</p>
                <div></div>
                <p className='fw-bold'>{items.Fname}</p>
            </div>
        </div>
    );
};

export default ImgDonor;
