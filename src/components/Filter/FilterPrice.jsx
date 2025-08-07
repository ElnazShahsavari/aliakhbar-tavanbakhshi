import React from 'react';

// محدود کردن قیمت ها
const FilterPrice = () => {
    return (
        <div className='bg-light rounded-3 p-3 my-3'>
            <label className='pb-3'>فیلتر براساس قیمت (تومان):</label>
            <div>
                <input type="number" placeholder="از قیمت" className=' bg-white border-0 mt-2 p-2 px-3 w-100 rounded-3' />
                <input type="number" placeholder="تا قیمت" className=' bg-white border-0 mt-2 p-2 px-3 w-100 rounded-3' />
            </div>
        </div>
    );
}

export default FilterPrice;
