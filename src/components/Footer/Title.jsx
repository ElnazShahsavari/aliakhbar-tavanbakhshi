import React from 'react';

const Title = ({title}) => {
    return (
        <div className='d-flex'>
            <div className='my-bg-yelow rounded ms-2' style={{width : '4px' , height : '27px'}}></div>
            <p className='fw-bold text-white'>{title}</p>
        </div>
    );
}

export default Title;
