import React, { useEffect, useState } from 'react';
import styles from './Comment.module.css';
import Comment from './Comment';

// پاسخ به کامنت دیگران
const Reply = ({ items }) => {
    return (
        <div className={`me-5 pe-5 mt-4 mb-2`}>
            <Comment items={items} orginalComment={false} />
        </div>
    );
};

export default Reply;
