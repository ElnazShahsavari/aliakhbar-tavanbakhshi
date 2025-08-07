import React from 'react';
import styles from './Category.module.css';
import TitleOfTask from './TitleOfTask';

// بخش بندی
const Category = ({ items, title }) => {
    return (
        <div className='bg-white mt-3 rounded-3 px-3 pt-2'>

            <TitleOfTask title={title} />

            <ul className='list-unstyled py-2 px-0'>
                {items.map((item, index) => (
                    <li className={`my-2 p-2 bg-light rounded-3 ${styles.item}`} key={index}>
                        <div className='my-bg-lightYellow p-1 ms-2 d-inline-block rounded-circle'></div>
                        {item}
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default Category;
