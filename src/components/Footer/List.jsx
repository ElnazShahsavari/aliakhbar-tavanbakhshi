import React from 'react';
import styles from './List.module.css';
import Title from './Title';
import { NavLink } from 'react-router-dom';

// لیست لینک ها
const List = ({ title, items }) => {
    return (
        <div className={styles.list}>
            <ul className='row text-white list-unstyled'>
                <Title title={title} />

                {items.map((item, index) => (
                    <li className='col col-6 col-md-12 py-1' key={index}>
                        <div className='d-flex align-items-center my-2'>
                            <div className={styles.marker}></div>
                            <NavLink to={item.link} className={`${styles.link} text-decoration-none text-white pe-2`}>
                                {item.title}
                            </NavLink>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
