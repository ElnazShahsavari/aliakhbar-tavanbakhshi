import React from 'react';
import TitleOfTask from '../Filter/TitleOfTask';
import SupportBtn from '../Buttons/SupportBtn';
import Counter from '../Filter/Counter';

const Price = ({ type, price, discountPrice }) => {
    return (
        <div className=' bg-white rounded-3 px-3 pb-3'>
            <TitleOfTask title='اطلاعات محصول' />
            <div className='d-flex justify-content-between bg-light rounded-3 px-3 py-2 mt-3'>
                <span>دسته بندی:</span>
                <span>{type}</span>
            </div>
            <div className='d-flex justify-content-between bg-light rounded-3 px-3 py-2 mt-3'>
                <span>مبلغ (تومان):</span>
                <div>
                    <span className='my-green fw-bold'>{discountPrice}</span>
                    <span className='text-muted text-decoration-line-through small px-2'>{price}</span>
                </div>
            </div>
            <div className='py-3 d-flex justify-content-between align-items-center'>
                <span className='small fw-bolder'>تعداد سفارش:</span>
                <Counter />
            </div>
            <SupportBtn title='خرید محصول'/>
        </div>
    );
}

export default Price;
