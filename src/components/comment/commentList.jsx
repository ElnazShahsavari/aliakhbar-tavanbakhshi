import React, { useState } from 'react';
import Comment from './Comment.jsx';

import img1 from '../../assets/img/comment1.png';
import img2 from '../../assets/img/comment2.png';
import img3 from '../../assets/img/comment3.png';
import img4 from '../../assets/img/comment4.png';
import img5 from '../../assets/img/comment5.png';
import AddComment from './AddComment.jsx';

const CommentList = () => {
    const [comments, AddToComments] = useState([
        {   
            email : '',
            name: 'سارا عزیزی',
            src: img1,
            date: '12 آذر 1404',
            time: '14:34',
            message: 'متن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شود',
            replies: [
                {
                    email : '',
                    name: 'نگار اوتادی',
                    src: img2,
                    date: '12 آذر 1404',
                    time: '14:34',
                    message: 'در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود ',
                },
                {
                    email : '',
                    name: 'محمد اکبری',
                    src: img3,
                    date: '12 آذر 1404',
                    time: '14:34',
                    message: 'در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح دوم نوشته می شود ',
                    replies: [
                        {
                            email : '',
                            name: 'نگار اوتادی',
                            src: img2,
                            date: '12 آذر 1404',
                            time: '14:34',
                            message: 'در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح سوم نوشته می شود در اینجا متن کاربر در پاسخ به کاربر دیگری در سطح سوم نوشته می شود.',
                        },
                    ],
                },
            ],
        },
        {
            email : '',
            name: 'حسین حسین زاده',
            src: img4,
            date: '12 آذر 1404',
            time: '14:34',
            message: 'متن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شود',
        },
        {
            email : '',
            name: 'زهرا محمدی',
            src: img5,
            date: '12 آذر 1404',
            time: '14:34',
            message: 'متن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شودمتن نظر کاربر دراینجا نوشته می شود',
        },
    ])
    
    return (
        <div className=' bg-white mt-3 mb-5 p-3 pb-0 border-muted rounded-3'>
            <div className='d-flex justify-content-between border-botton-muted p-2'>
                <h5 className='fw-bolder'>نظرات کاربران</h5>
                <span className='small text-muted'>
                <i className="bi bi-chat-square-dots mx-1"></i>
                 23 نظر
                </span>
            </div>

            <AddComment AddToComments={AddToComments}/>

            {comments.map((comment, index) => (
                <Comment key={index} items={comment} />
            ))}
        </div>
    );
};

export default CommentList;
