import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dropdown.module.css';

function Dropdown({ title, items }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <li className={`px-3 mt-4 mb-2 mb-xl-0 mt-xl-2 position-relative ${styles.drop}`} onMouseEnter={() => setIsOpen(true)}>
            <span className={`text-white mt-2 d-block cursor-pointer`}>
                {title}
            </span>

            {isOpen && (
                <ul className={`${styles.list} position-absolute list-unstyled mt-2 px-2 rounded-3 shadow bg-white border-muted`} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    {items.map((item, index) => (
                        <li key={index} className="py-2 px-1 w-100">
                            <NavLink to={item.path} className={`${styles.item} text-decoration-none text-black fw-normal py-2 px-2 w-100 d-flex rounded-4`}>
                                <i className="bi bi-slack my-green ms-2"></i>
                                {item.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default Dropdown;
