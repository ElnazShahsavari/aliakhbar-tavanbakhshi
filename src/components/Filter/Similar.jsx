import React from 'react';
import styles from './Similar.module.css';
import TitleOfTask from './TitleOfTask';
import { Link } from 'react-router-dom';


const Similar = ({ title, items , pathLink }) => {
    return (
        <div className='bg-white p-3 rounded-3'>
            <TitleOfTask title={title} />
            {items.slice(15, 20).map((item, index) => (
                <Link to={`/${pathLink}/${item.id}`} className={`${styles.taskBox} mt-3 p-2 bg-light rounded-3 overflow-hidden d-flex text-decoration-none text-black`} key={index}>
                    <img src={item.src} alt={item.title} className='object-fit-cover rounded-3' />
                    <span className='me-2'>{item.title}</span>
                </Link>
            ))}
        </div>
    );
}

export default Similar;
