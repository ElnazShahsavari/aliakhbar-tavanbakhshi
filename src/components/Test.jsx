import styles from './test.module.css';
import React from 'react';

function DiagonalSplit() {
  return (
    <div className={styles.container}>
      <div className={styles.rightBox}>باکس دکمه‌ها</div>
      <div className={styles.leftBox}>باکس اطلاعات</div>
    </div>
  );
}

export default DiagonalSplit;
