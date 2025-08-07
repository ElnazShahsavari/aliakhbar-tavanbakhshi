import React from 'react';
import CardPart from './CardPart';

// باکس برای بخش های مختلف سایت
const BoxParts = ({items}) => {
    return (
        <div className='row row-cols-3 row-cols-md-6 d-flex align-items-stretch justify-content-space-between'>
            {items.map((item, index) => (
                <div className='col' key={index}>
                    <CardPart items={item} />
                </div>
            ))}
        </div>
    );
}

export default BoxParts;
