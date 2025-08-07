import React from 'react';
import ImgNews from './ImgNews';

// باکس برای بخش بازدید ها
const BoxViews = ({ items }) => {
    return (
        <div className='row row-cols-1 row-cols-lg-2 d-flex align-items-stretch bg-white rounded pb-2 ps-2 border-muted'>
            <div className='col'>
                <ImgNews items={items[0]} />
            </div>
            <div className='col'>
                <div className='row row-cols-2 justify-content-space-between h-100'>
                    {items.slice(1, 5).map((item, index) => (
                        <div className='col' key={index}>
                            <ImgNews items={item} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BoxViews;
