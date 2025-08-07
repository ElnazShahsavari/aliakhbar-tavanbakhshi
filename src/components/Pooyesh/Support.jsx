import React, { useState } from 'react';
import Counter from '../Filter/Counter';
import SupportBtn from '../Buttons/SupportBtn';

// نشان دادن میزان حمایت از پویش
const Support = () => {
    const [number, setNumber] = useState(1);

    // for green box
    const percentage = 64;
    const amount = '۶۶,۴۰۰,۰۰۰';
    return (
        <div>

            <div className=' d-flex justify-content-between align-items-center mt-5'>
                <span>سهم شما در پویش (هر سهم 50،000 تومان):</span>
                <div className=' d-flex'>
                    <span className='d-flex flex-nowrap align-items-center'>{number * 50000}تومان</span>
                    <div className='mx-2 px-1 d-flex align-items-center'>
                        <Counter value={number} onChange={setNumber} />
                    </div>
                    <SupportBtn title='حمایت می کنم' />
                </div>
            </div>

            {/* green box */}
            <div className='my-bg-green rounded-3 p-3 px-4 mt-3'>
                <div className=' d-flex justify-content-between align-items-center'>
                    <h5 className='fs-5 text-white'>میزان تامین نیازمندی تاکنون:</h5>
                    <div className='d-flex align-items-center'>
                        <span className='my-green bg-light small rounded-3 p-1 px-2 mx-2 fw-medium'>64%</span>
                        <h5 className='my-yellow fs-5 mt-1 my-lightYellow'>66،400،000 تومان</h5>
                    </div>
                </div>

                <div className='bg-light p-1 mt-3 rounded-pill d-flex justify-content-end'>
                    <div className='my-bg-lightYellow rounded-pill py-1 w-75'></div>
                </div>
            </div>
        </div>
    );
}

export default Support;
