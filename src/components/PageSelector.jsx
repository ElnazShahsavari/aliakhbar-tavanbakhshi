import React, { useState } from 'react';
import styles from './PageSelector.module.css';

// شمارنده صفحه بندی
const PageSelector = () => {
    const pages = [1, 2, 3, 4, 5, 6, 7];
    const [currentPage, setCurrentPage] = useState(3);

    const handlePrev = () => {
        const prev = pages.filter(p => p < currentPage).pop();
        if (prev) setCurrentPage(prev);
    };

    const handleNext = () => {
        const next = pages.find(p => p > currentPage);
        if (next) setCurrentPage(next);
    };

    return (
        <div className=' d-flex align-items-center mt-3'>
            <button onClick={handlePrev} className={`p-1 px-2 my-green fw-bolder fs-5 bg-white rounded-3 border-0`}>
                <i class="bi bi-arrow-right"></i>
            </button>

            <div className={`${styles.box} bg-white p-1 rounded-4`}>
                {pages.map(page => (
                    <button key={page} onClick={() => setCurrentPage(page)} className={`${styles.page} ${page === currentPage ? styles.active : ''} text-muted small fw-normal rounded-3`}>
                        {page}
                    </button>
                ))}
            </div>

            <button onClick={handleNext} className={`p-1 px-2 my-green fw-bolder fs-5 bg-white rounded-3 border-0`}>
                <i class="bi bi-arrow-left"></i>
            </button>
        </div>
    );
};

export default PageSelector;
