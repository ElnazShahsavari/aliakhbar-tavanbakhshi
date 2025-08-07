import React from 'react';
import styles from './CopyRight.module.css'

const CopyRight = () => {
    return (
        <div className={`col col-12 col-md-9 bg-light ${styles.section}`}>
            <div className='pt-2 d-flex justify-content-between'>
                <span>کلیه حقوق مادی و معنوی دوره ها متعلق به وبسایت موسسه توانبخشی علی اکبر (ع) می باشد</span>
                <div className={`${styles.linkBox} ms-4 d-flex`}>
                    <a href="" className='m-1 rounded-3 py-1 px-2 my-green my-bg-light fs-5 d-flex align-items-center justify-content-center'>
                        <i className="bi bi-telegram"></i>
                    </a>
                    <a href="" className='m-1 rounded-3 py-1 px-2 my-green my-bg-light fs-5 d-flex align-items-center justify-content-center'>
                        <i className="bi bi-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default CopyRight;
