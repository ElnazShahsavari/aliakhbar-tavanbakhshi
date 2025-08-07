import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SupportBtn.module.css'

// دکمه سبز رنگ برای ورود به صفحه توضیحات
const SupportBtn = ({title , link}) => {
    return (
        <Link to={link} className={`btn ${styles.SupportBtn} w-100 fs-6`}>
            {title}
        </Link>
    );
}

export default SupportBtn;
