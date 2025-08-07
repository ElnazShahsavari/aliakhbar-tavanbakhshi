import React from 'react';
import CardInfo from '../components/MainContent/CardInfo';
import UpDownBtn from '../components/Buttons/UpDownBtn';
import TitleOfPage from '../components/TitleOfPage';
import PagePath from '../components/PagePath';
import Category from '../components/Filter/Category';
import GetInvolved from '../components/Filter/GetInvolved';
import Filter from '../components/Mahsoolat/Filter';
import SearchBox from '../components/Filter/SearchBox';
import PageSelector from '../components/PageSelector';

// دسته بندی ها
const parts = ['همه دسته بندی ها', 'صنایع دستی ترپینی', 'تابلو ها', 'بافتنی', 'چوبی']

// صفحه محصولات
const Mahsoolat = ({ items }) => {
    return (
        <section>

            {/* header of the page */}
            <PagePath title1='محصولات' />
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <TitleOfPage title='محصولات' />
                <UpDownBtn up='گرانترین محصول' down='ارزان ترین محصول' />
            </div>

            <div className='row'>

                {/* جستجو و تنظیمات بخش */}
                <div className='col col-12 col-md-4 col-lg-3 mt-3'>
                    <SearchBox />
                    <Category title='دسته بندی ها' items={parts} />
                    <Filter />
                    <GetInvolved />
                </div>

                {/* محصولات */}
                <div className='col col-12 col-md-8 col-lg-9 px-0 px-sm-1 px-md-0 px-lg-2'>

                    <div className='row row-cols-2 row-cols-lg-3'>
                        {items.slice(0, 6).map((item, index) => (
                            <div className='col mt-3 px-2 px-sm-3 px-md-1 px-xl-3' key={index}>
                                <CardInfo items={item} type='mahsool' miniText='دست سازه ' />
                            </div>
                        ))}
                        {items.slice(6, 12).map((item, index) => (
                            <div className='col mt-3 d-none d-lg-block px-xl-3' key={index}>
                                <CardInfo items={item} type='mahsool' miniText='دست سازه ' />
                            </div>
                        ))}
                    </div>

                    {/* page number */}
                    <PageSelector />

                </div>
            </div>

        </section>
    );
}

export default Mahsoolat;
