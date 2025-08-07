import React from 'react';
import Title from './Title';

import items from '../../assets/information/ertebat';

const Ways = () => {
    return (
                <ul className='text-white list-unstyled ms-5 mt-5 mt-md-0 d-flex flex-column flex-wrap'>
                    <Title title='راه های ارتباطی' />

                    {items.map((item, index) => (
                        <li className='py-1' key={index}>
                            <div className='d-flex'>
                                <i className={`bi ${item.icon} ms-3 my-yellow`}></i>
                                <span>{item.title}</span>
                            </div>
                            <div className='d-flex flex-column me-4 pt-1 pe-1'>
                                <span className='small' dir='ltr'>{item.text}</span>
                                <span className='small' dir='ltr'>{item.text2}</span>
                            </div>
                        </li>
                    ))}
                </ul>
    );
}

export default Ways;
