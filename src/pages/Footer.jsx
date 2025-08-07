import React from 'react';
import List from '../components/Footer/List';
import Logo from '../components/Footer/Logo';
import Ways from '../components/Footer/Ways';

import bakhshItems from '../assets/information/bakhsh';
import quickItems from '../assets/information/quickAccess';
import CopyRight from '../components/Footer/CopyRight';

const Footer = () => {
    return (
        <div className='row my-bg-green mt-5 pt-4 rounded-2 '>

            <div className='col col-12 col-lg-3 mb-3'>
                <Logo />
            </div>

            <div className='col col-12 col-md-6 col-lg-3 mt-4'>
                <List title='دسترسی سریع' items={quickItems} />
            </div>

            <div className='col col-lg-3 d-none d-lg-block mt-4'>
                <List title='بخش ها' items={bakhshItems} />
            </div>

            <div className='col col-12 col-md-6 col-lg-3 mt-4'>
                <Ways />
            </div>

            <CopyRight />
        </div>
    );
}

export default Footer;
