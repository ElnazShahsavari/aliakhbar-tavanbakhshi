import React from 'react';
import ImgNews from './ImgNews';
import CardInfo from './CardInfo';

// باکس اخبار
const BoxNews = ({ items, type }) => {
    return (
        <div className='row d-flex align-items-stretch bg-white border-muted p-2 rounded'>
            <div className='col col-12 col-lg-6 my-2 overflow-hidden'>
                <ImgNews items={items[0]} />
            </div>
            <div className='col col-6 col-lg-3 px-1 px-md-2
            '>
                <CardInfo items={items[1]} type={type} />
            </div>
            <div className='col col-6 col-lg-3 px-1 px-md-2
            '>
                <CardInfo items={items[2]} type={type} />
            </div>
        </div>
    );
}

export default BoxNews;
