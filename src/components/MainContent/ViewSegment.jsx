import React from 'react';
import styles from './ViewSegment.module.css'
import ViewBtn from '../Buttons/ViewBtn';

const ViewSegment = ({ children, title, text, btn = true , path}) => {
    return (
        <section className='mb-5 pb-5 mt-5'>
            {/* title */}
            <div className='d-flex justify-content-between mb-3 position-relative'>
                <div className={styles.section}>
                    <h5 className='pe-2 fw-bold'>{title}</h5>
                    <span className='pe-2 text-muted'>{text}</span>
                </div>
                {btn && <div className='position-absolute bottom-0 start-0'>
                    <ViewBtn link={path}/>
                </div>}
            </div>
            {children}
        </section>
    );
}

export default ViewSegment;
