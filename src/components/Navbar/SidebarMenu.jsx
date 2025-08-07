import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SidebarMenu.module.css';
import Logo from './Logo';


// منوی کشویی
function SidebarMenu({ navItems, BakhshItems }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='d-lg-none'>
            <button className="btn pt-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i className="bi bi-list text-white"></i>
            </button>

            <div className="offcanvas offcanvas-end bg-light" tabIndex="-1" id="offcanvasRight">
                <div className="offcanvas-header d-flex justify-content-between">
                    <Logo />
                    <button type="button" className="btn fw-bolder my-green fs-5" data-bs-dismiss="offcanvas">
                        <i className="bi bi-x-octagon"></i>
                    </button>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column text-end">
                        <li className={`nav-item bg-white rounded-3 mb-2 py-1 ${styles.item}`}><NavLink to={navItems[0].path} className="nav-link text-decoration-none text-black" href="#">صفحه اصلی</NavLink></li>
                        <li className="nav-item bg-white rounded-3 mb-2 py-1"><NavLink className="nav-link text-decoration-none text-black" href="#">بخش‌ها</NavLink></li>
                        
                        <ul className='list-unstyled pe-1'>
                            {BakhshItems.map((item, index) => (
                                <li key={index} className='nav-item'>
                                    <NavLink
                                        to='/ComingSoon'
                                        className={`nav-link text-decoration-none text-black fw-medium ${styles.dropdown}`}>
                                        <i className="bi bi-slack my-green ms-2"></i>
                                        {item.title}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>


                        {navItems.slice(1, 9).map((item, index) => (
                            <li key={index} className={`nav-item bg-white rounded-3 mb-2 py-1 ${styles.item}`}>
                                <NavLink
                                    to={item.path}
                                    className='nav-link text-decoration-none text-black'>
                                    {item.title}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default SidebarMenu;
