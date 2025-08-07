import React from 'react';
import { Link } from 'react-router-dom';

const CardPart = ({ items }) => {
    return (
        <Link to={items.link} className='p-3 text-decoration-none text-black d-flex justify-content-center flex-column align-items-center'>
            <div className='position-relative'>
                <img src={items.src} alt={items.title} className='w-100'/>
                <div className='position-absolute w-100 bottom-0'></div>
            </div>
            <p className='text-center pt-2 fw-bold'>{items.title}</p>
        </Link>
    );
}

export default CardPart;
