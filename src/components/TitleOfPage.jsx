import React from 'react';

// عنوان هر صفحه
const TitleOfPage = ({title}) => {
    return (
        <h4 className='my-green fw-bolder'>
           {title} 
        </h4>
    );
}

export default TitleOfPage;
