import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavbarItems.module.css';
import DepositBtn from '../Buttons/DepositBtn';
import SidebarMenu from './SidebarMenu';
import Dropdown from './Dropdown';

import BakhshItems from '../../assets/information/bakhsh';

const navItems = [
    { title: 'صفحه اصلی', path: '/' },
    { title: 'پویش ها', path: '/Pooyesh' },
    { title: 'محصولات', path: '/Mahsoolat' },
    { title: 'کالاهای امانی', path: '/ComingSoon' },
    { title: 'بازدید و ملاقات', path: '/ComingSoon' },
    { title: 'اخبار', path: '/ComingSoon' },
    { title: 'تماس با ما', path: '/ComingSoon' },
    { title: 'درباره ما', path: '/ComingSoon' },
    { title: 'ورود و ثبت نام', path: '/ComingSoon' },
]

// منو
const NavbarItems = () => {
    return (
        <div className='my-bg-green pb-2 px-1 rounded-3 text-white small fw-medium d-flex justify-content-between align-items-center'>

            {/* navbar links for PC */}
            <ul className={`${styles.list} d-none d-lg-flex align-items-center flex-wrap list-unstyled mb-0 px-0`}>
                {/* home link */}
                <li className='px-3 mt-4 mb-2 mb-xl-0 mt-xl-2 border-0 position-relative'>
                    <NavLink
                        to={navItems[0].path}
                        className={({ isActive }) =>
                            `${isActive ? `${styles.link} ${styles.active}` : styles.link} text-decoration-none text-white pb-2`
                        }>
                        <i className="bi bi-house ps-2"></i>
                        {navItems[0].title}
                        <div className={styles.botton}></div>
                    </NavLink>                  
                </li>

                {/* dropdown link */}
                <Dropdown title="بخش ها" items={BakhshItems} />

                {/* other links */}
                {navItems.slice(1, 9).map((item, index) => (
                    <li key={index} className='px-3 mt-4 mb-2 mb-xl-0 mt-xl-2 position-relative'>
                        <NavLink to={item.path} className={({ isActive }) => `${isActive ? `${styles.link} ${styles.active}` : styles.link} text-decoration-none text-white pb-2`}>
                            {item.title}
                            <div className={styles.botton}></div>
                        </NavLink>
                    </li>
                ))}
            </ul>


            {/* navbar links for mobile */}
            <SidebarMenu navItems={navItems} BakhshItems={BakhshItems} />


            <div className='ps-1 mt-2 d-flex align-items-center'>
                <span className={`${styles.borderDasht} ps-2`}>EN</span>
                <div className='position-relative pt-1 pe-2 ms-3 me-2'>
                    <i className="bi bi-cart3 fs-5"></i>
                    <div className='position-absolute top-0 end-0 bg-danger rounded-circle px-1 small'>34</div>
                </div>
                <DepositBtn title='ورود و ثبت نام' icon={false} />
            </div>
        </div>
    );
}

export default NavbarItems;
