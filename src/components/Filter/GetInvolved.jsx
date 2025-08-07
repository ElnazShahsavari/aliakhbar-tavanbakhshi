import React from 'react';

import img from '../../assets/img/involved.png';

// دعوت به همکاری
const GetInvolved = () => {
    return (
        <div className='border-green mt-3 rounded-4 overflow-hidden text-center'>
            <img src={img} alt="involved" className='w-100' />
            <h5 className='fs-6 fw-bolder my-green pt-2'>داوطلب همکاری!!</h5>
            <p className='fw-bold px-2'>اگر دارای تجربه یا مهارت  خاصی هستی میتونی آمادگی خودت رو جهت کمک به موسسه و افراد توانجو اینجا بهمون بگی!</p>
        </div>
    );
}

export default GetInvolved;
