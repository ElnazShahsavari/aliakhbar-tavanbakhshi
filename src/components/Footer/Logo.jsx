import React from 'react';

import logo from '../../assets/img/logo2.png';
import enamad from '../../assets/img/enamad.png';


const Logo = () => {
    return (
        <div className='row row-cols-2 row-cols-lg-1 d-flex align-items-stretch'>
            <div className='col d-flex justify-content-center align-items-center'>
                <div className=' d-inline-block px-3 m-2'>
                    <img src={logo} alt="logo" className='w-100' />
                </div>
            </div>
            <div className='col d-flex justify-content-center'>
                <div className='rounded-5 d-inline-block text-center p-3 m-2 my-bg-light'>
                    <img src={enamad} alt="enamad" className='' />
                </div>
            </div>
        </div>
    );
}

export default Logo;
