import React from 'react';
import CheckBox from '../Filter/CheckBox';
import FilterPrice from '../Filter/FilterPrice';
import TitleOfTask from '../Filter/TitleOfTask';
import SupportBtn from '../Buttons/SupportBtn';

const Filter = () => {
    return (
        <div className='bg-white p-3 rounded-3'>
            <TitleOfTask title='فیلتر'/>
            <CheckBox title='تکمیل شده' />
            <CheckBox title='درحال اجرا' />
            <CheckBox title='منقضی شده' />
            <FilterPrice />
            <SupportBtn title='اعمال فیلتر' />
        </div>
    );
}

export default Filter;
