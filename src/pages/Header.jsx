import React from 'react';
import Slider from '../components/Header/Slider';
import FinancialSupport from '../components/Header/FinancialSupport';

const Header = () => {
    return (
        <section className='row d-flex align-items-stretch pb-5'>
            <Slider />
            <FinancialSupport/>
        </section>
    );
}

export default Header;
