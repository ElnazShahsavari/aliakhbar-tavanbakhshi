import React from 'react';
import styles from './TitleOfTask.module.css';

// عنوان هر بخش
const TitleOfTask = ({title}) => {
    return (
        <div className={`${styles.section} d-flex align-items-center pb-3 pt-4 mb-4`}>
            <div className='pt-1 w-25 rounded-pill my-bg-green'></div>
            <i className="bi bi-slack my-green"></i>
            <h5 className='text-black fw-bolder mx-2'>{title}</h5>
        </div>
    );
}

export default TitleOfTask;
