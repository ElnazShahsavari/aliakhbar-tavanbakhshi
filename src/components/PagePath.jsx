import React from 'react';
import styles from './PagePath.module.css';

// نشان دادن موقعیت شخص در سایت
const PagePath = ({ title1, title2 }) => {
    return (
        <div className={`${styles.box} d-flex align-items-center py-2`}>

            <h5 className='bold my-green fs-6'>صفحه اصلی</h5>
            <i className="bi bi-arrow-left mx-1 my-green"></i>

            <h5 className={`bold fs-6 ${title2 ? 'my-green' : 'text-muted'}`}>{title1}</h5>
            {title2 && <><i className="bi bi-arrow-left mx-1 my-green"></i>
                <h5 className='bold text-muted fs-6'>{title2}</h5></>}
        </div>
    );
}

export default PagePath;
