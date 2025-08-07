import React from 'react';

const SearchBox = () => {
    return (
        <div className='bg-white p-3 rounded-3 d-flex justify-content-between align-items-center'>
            <input
                type="text"
                placeholder="جستجو"
                aria-label="Search"
                className='bg-light border-0 rounded-end-3 w-100 p-2'
            />
            <button className='bg-light p-2 rounded-start-3 my-green border-0'>
                <i className="bi bi-search"></i>
            </button>
        </div>
    );
}

export default SearchBox;
