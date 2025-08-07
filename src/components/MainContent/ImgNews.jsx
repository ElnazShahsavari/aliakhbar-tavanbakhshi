import React from 'react';
import styles from './ImgNews.module.css';

const ImgNews = ({ items }) => {
    return (
        <div className={`${styles.card} pt-2`}>
            <img src={items.src} alt={items.title} />
            <div className={styles.boxShadow}></div>
            <div className='mb-3 mx-2'>
                <p className='text-white fw-bold my-1'>{items.title}</p>
                <span className='small fw-medium text-white'>{items.date}</span>
            </div>
        </div>
    );
}

export default ImgNews;
