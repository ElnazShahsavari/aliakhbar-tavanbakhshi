import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './ViewBtn.module.css';

const ViewBtn = ({ link , title = 'مشاهده همه' , btnClass}) => {
   
    return (
        <NavLink to={link} className={`${styles.link} text-decoration-none fw-bold ${btnClass}`}>
            {title}
            <i className="bi bi-arrow-left-square me-2 rounded"></i>
        </NavLink>
    );
}

export default ViewBtn;
