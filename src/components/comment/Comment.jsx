import React from 'react';
import styles from './Comment.module.css';
import Reply from './Reply';

const Comment = ({ items, orginalComment = true }) => {
  return (
    <div className={`${styles.commentBox} w-100 ${orginalComment && 'border-botton-muted py-4 px-3'}`}>
      <div className='d-flex'>

        <img src={items.src} alt={items.name} className={styles.profile} />
        <div className='w-100 me-2'>
          <div className=' d-flex justify-content-between w-100'>

            {/* name of person */}
            <div className='fw-bold'>{items.name}</div>

            {/* time and date */}
            <div className='d-flex justify-content-between align-items-center'>
              <div className='small text-muted ms-2'>{items.date} ساعت {items.time}</div>

              {/* reply button */}
              <button className={`${styles.replyBtn} border-0 px-3 rounded-3 d-flex align-items-center`}>
                <i className="bi bi-arrow-90deg-left"></i>
                {orginalComment && <span className='pe-1 pb-2'>پاسخ</span>}
              </button>

            </div>
          </div>
          {/* text of comment */}
          <div className='text-muted ps-3'>{items.message}</div>
        </div>
      </div>

      {
        items.replies && items.replies.length > 0 && (
          <div>
            {items.replies.map((item, index) => (
              <Reply key={index} items={item}/>
            ))}
          </div>
        )
      }
    </div >
  );
};

export default Comment;
