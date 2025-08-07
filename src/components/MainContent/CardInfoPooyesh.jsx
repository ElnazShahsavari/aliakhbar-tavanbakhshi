import React from 'react';
import SupportBtn from '../Buttons/SupportBtn';

import img0 from '../../assets/img/Status0.png';
import img05 from '../../assets/img/Status0.5.png';
import img1 from '../../assets/img/Status1.png';

// برای نشان دادن اطلاعات پویش در هر کارت پویش
const CardInfoPooyesh = ({ items, link }) => {
    return (
        <div className='d-flex'>
            <div className='w-25 d-flex justify-content-center align-items-center'>
                {items.status == 0 ? <img src={img0} alt={items.status} className='w-100' /> :
                    items.status == 1 ? <img src={img1} alt={items.status} className='w-100' /> :
                        <img src={img05} alt={items.status} className='w-100' />}
            </div>
            <div className='w-75 pe-2'>
                {items.nowPrice && <div className='mb-2'>
                    <span className='small fw-bold'>{items.nowPrice} </span>
                    <span className='small fw-medium text-muted'>از {items.maxPrice} تومان</span>
                </div>}
                {!items.nowPrice && <div className='mb-2 text-center'>
                <span className='small'>{items.endPooyesh}</span>
                </div>}
                <SupportBtn title={items.btnTitle} link={link} />
            </div>
        </div>
    );
}

export default CardInfoPooyesh;
