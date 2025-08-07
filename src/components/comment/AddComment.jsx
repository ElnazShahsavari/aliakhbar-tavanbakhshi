import React, { useRef, useState } from 'react';
import styles from './Comment.module.css';

import img from '../../assets/img/comment2.png';

// اضافه کردن کامنت
const AddComment = ({ AddToComments }) => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // the time you add the comment
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        // the date you add the comment
        const altFormat = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

        const newFeedback = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value,
            src: img,
            time: formattedTime,
            date: altFormat
        };

        AddToComments(prev => [...prev, newFeedback]);

        // پاک کردن فیلدها بعد از ارسال
        nameRef.current.value = '';
        emailRef.current.value = '';
        messageRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit} className='row mt-4 border-botton-muted'>

            <div className='col col-12 col-md-6'>
                <label className='form-label'>
                    نام و نام خانوادگی:
                    <span className='text-danger'>*</span>
                </label>
                <input
                    type="text"
                    name="name"
                    required
                    ref={nameRef}
                    className='form-control bg-light'
                />
            </div>

            <div className='col col-12 col-md-6'>
                <label className='form-label'>
                    ایمیل:
                    <span className='text-danger'>*</span>
                </label>
                <input
                    type="email"
                    name="email"
                    required
                    ref={emailRef}
                    className='form-control bg-light'
                />
            </div>

            <div className='col col-12 col-md-12 mt-4'>
                <label className='form-label'>
                    متن پیام:
                    <span className='text-danger'>*</span>
                </label>
                <textarea
                    name="message"
                    required
                    ref={messageRef}
                    rows="6"
                    className='form-control bg-light'
                />
            </div>

            <div className='my-3 d-flex justify-content-end'>
                <button type="submit" className={`${styles.submit} border-0 px-5 py-2`}>ارسال</button>
            </div>
        </form>
    );
};

export default AddComment;
