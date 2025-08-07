import React from 'react';
import styles from './UpDownBtn.module.css'

const UpDownBtn = ({ up, down }) => {
    return (
        <div className={styles.box}>
            <button className={`text-muted p-2 mx-1 rounded-3 border-0 bg-white ${styles.btn}`}>
                <i className="bi bi-arrow-down"></i>
                {down}
            </button>
            <button className={`text-muted p-2 mx-1 rounded-3 border-0 bg-white ${styles.btn}`}>
                <i className="bi bi-arrow-up"></i>
                {up}
            </button>
        </div>
    );
}

export default UpDownBtn;
