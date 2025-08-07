import React from 'react';
import { Link } from 'react-router-dom';
import styles from './SupportBtn.module.css'

const SupportBtn = ({title , link}) => {
    return (
        <Link to={link} className={`btn ${styles.SupportBtn} w-100`}>
            {title}
        </Link>
    );
}

export default SupportBtn;
