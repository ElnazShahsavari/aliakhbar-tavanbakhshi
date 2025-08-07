import React from 'react';
import CheckBtn from '../Buttons/CheckBtn';

const CheckBox = ({title}) => {
    return (
        <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between`}>
            <span>{title}</span>
            <CheckBtn />
        </div>
    );
}

export default CheckBox;
