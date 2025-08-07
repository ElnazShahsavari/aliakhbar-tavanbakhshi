import React from 'react';
import styles from './SinglePageExplain.module.css';
import SupportBtn from './Buttons/SupportBtn';

import img1 from '../assets/img/tavan5.png';
import img2 from '../assets/img/tavan4.png';
import img3 from '../assets/img/tavan1.png';

// باکس توضیحات برای صفحه های توضیح یک آیتم
const SinglePageExplain = ({ items , children , miniText , Team}) => {
    return (
            <section className='p-4 bg-white rounded-3 border-muted'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h5 className='fw-bolder'>{items.title}</h5>
                    <div className='d-flex justify-content-between'>
                        <SupportBtn title={<i className="bi bi-bookmark-dash"></i>} />
                        <SupportBtn title={<i className="bi bi-ubuntu"></i>} />
                    </div>
                </div>

                <img src={items.src} alt={items.title} className={`${styles.img} w-100 mb-3 mt-2 rounded-3`} />

                <p className='small py-1 pb-3'>{items.explain}</p>

                <div className='row d-flex align-items-stretch mb-2'>
                    <div className='col col-1'>
                        <div className='position-relative'>
                            <img src={img1} alt="profile" className={styles.profile1}/>
                            <img src={img2} alt="profile" className={styles.profile2}/>
                            <img src={img3} alt="profile" className={styles.profile3}/>
                            <div className={styles.profile4}>2+</div>
                        </div>
                    </div>
                    <div className='col col-11'>
                        <div className='p-2 px-5 rounded-3 w-100 bg-light d-flex align-items-center'>
                            <span className='small text-muted fw-medium'>{miniText}</span>
                            <span className='fw-bold mx-2'>{Team}</span>
                        </div>
                    </div>
                </div>

                {children}
            </section>
    );
}

export default SinglePageExplain;
