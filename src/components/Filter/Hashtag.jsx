import React from 'react';
import TitleOfTask from './TitleOfTask';

const Hashtag = ({ item }) => {
    return (
        <div className='bg-white rounded-3 p-3 mt-3'>
            <TitleOfTask title='برچسب ها' />
            <div className='mt-3 d-flex flex-wrap'>
                {item.hashtag.map((hashtag, index) => (
                    <div className='bg-light rounded-3 mx-1 my-2 p-1 px-2 text-muted' key={index}>
                        #{hashtag}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hashtag;
