import React from 'react';
import PagePath from '../components/PagePath';
import TitleOfPage from '../components/TitleOfPage';
import UpDownBtn from '../components/Buttons/UpDownBtn';
import SearchBox from '../components/Filter/SearchBox';
import Category from '../components/Filter/Category';
import GetInvolved from '../components/Filter/GetInvolved';
import CardInfo from '../components/MainContent/CardInfo';
import Filter from '../components/Pooyesh/Filter';
import PageSelector from '../components/PageSelector';

// دسته بندی ها
const parts = ['همه دسته بندی ها', 'درمانی', 'تحصیل', 'ازدواج', 'ساخت و ساز', 'شغل', 'سایر']

const Pooyesh = ({ items }) => {
    return (
        <section>

            {/* header of the page */}
            <PagePath title1='پویش ها' />
            <div className='d-flex justify-content-between align-items-center mt-3'>
                <TitleOfPage title='پویش ها' />
                <UpDownBtn up='پویش با الویت بالا' down='پویش رو به اتمام' />
            </div>

            <div className='row'>

                {/* جستجو و تنظیمات بخش */}
                <div className='col col-md-4 col-lg-3 mt-3 d-none d-md-block'>
                    <SearchBox />
                    <Category title='دسته بندی ها' items={parts} />
                    <Filter />
                    <GetInvolved />
                </div>

                {/* محصولات */}
                <div className='col col-12 col-md-8 col-lg-9'>

                    <div className='row row-cols-2 row-cols-lg-3'>
                        {items.slice(0, 6).map((item, index) => (
                            <div className='col mt-3' key={index}>
                                <CardInfo items={item} type='pooyesh' />
                            </div>
                        ))}
                        {items.slice(6, 12).map((item, index) => (
                            <div className='col mt-3 d-none d-lg-block' key={index}>
                                <CardInfo items={item} type='pooyesh' />
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

export default Pooyesh;

