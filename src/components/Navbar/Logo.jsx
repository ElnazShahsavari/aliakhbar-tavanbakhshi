import React from 'react';
import styles from './logo.module.css'
import logoImage from '../../assets/img/logo.png'

function Logo(){
    return (
    <div className={styles.logoContainer}>
      <img src={logoImage} alt="لوگوی موسسه توانبخشی حضرت علی اکبر" />
      <span className={styles.logoText}>
        موسسه خیریه توانبخشی حضرت علی اکبر (ع)
      </span>
    </div>
    );
}

export default Logo;
