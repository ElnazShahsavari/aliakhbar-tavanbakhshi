import React from 'react';
import ImgDonor from './ImgDonor';

// باکس برای معرفی خیرین
const BoxDonor = ({ items }) => {
    return (
        <div className='row row-cols-2 row-cols-md-4'>
            {items.slice(0, 4).map((item, index) => (
                <div className='col' key={index}>
                    <ImgDonor items={item} />
                </div>
            ))}
        </div>
    );
}

export default BoxDonor;
