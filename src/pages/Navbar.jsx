import React from 'react';
import Logo from '../components/Navbar/Logo'
import ContactNumber from '../components/Navbar/contactNumber';
import SearchBox from '../components/Filter/SearchBox';
import NavbarItems from '../components/Navbar/NavbarItems';

const Navbar = () => {
    return (
        <nav className='bg-white shadow-sm sticky-top w-100'>
            <div className='container pt-1 pb-3'>
                <div className='d-flex justify-content-between align-items-center'>
                    <Logo />
                    <div className='d-flex align-items-center'>
                        <SearchBox />
                        <ContactNumber />
                    </div>
                </div>

                {/* green box */}
                <NavbarItems />
            </div>
        </nav>
    );
}

export default Navbar;
