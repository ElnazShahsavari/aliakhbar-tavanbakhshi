import React from 'react';
import TitleOfTask from '../Filter/TitleOfTask';
import SupportBtn from '../Buttons/SupportBtn';
import CheckBox from '../Filter/CheckBox';
import FilterPrice from '../Filter/FilterPrice';

// دسته بندی و فیلتر کردن قیمت محصولات
const Filter = () => {
    return (
        <div className=' bg-white px-3 py-2 pb-3 rounded-3'>
            <TitleOfTask title='فیلتر' />

            <CheckBox title='فقط محصولات موجود'/>

            <FilterPrice />

            <SupportBtn title='فیلتر کردن' />
        </div>
    );
}

export default Filter;
