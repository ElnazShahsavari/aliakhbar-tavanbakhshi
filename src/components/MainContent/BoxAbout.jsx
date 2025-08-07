import React from 'react';
import styles from './BoxAbout.module.css';
import Title from '../Footer/Title';

import img from '../../assets/img/About.png'
import ViewBtn from '../Buttons/ViewBtn';

const title = 'موسسه خیریه توانبخشی حضرت علی اکبر (ع)'
const text1 = 'موسسه ی عظیم توانبخشی حضرت علی اکبر (ع) در شهریور ماه 1376 به همت والای تعدادی از خیرین و بهزیستی شهرستان بیرجند و در شهرک شهید مفتح (معصومیه) بنیاد گذاشته شد.'
const text2 = 'امروز این مرکز که در نوع خود بزرگترین موسسه مجهز بخش خصوصی جهت نگهداری و توانبخشی معلولان و سالمندان در شرق کشور است در فضایی به وسع 51500 متر مربع و زیربنایی با ظرفیت نهایی 370 نفر در تمامی زمینه های نگهداری و ختران- حرف آموزی- آرتروز و پرتوز- توانبخش- درمانگاه تخصص دندانپزشکی و کلینیک درمانی و امور متکدیان در حال خدمات رسانی می باشد.'

// باکس برای معرفی موسسه
const BoxAbout = () => {
    return (
        <>
            {/* for big screen */}
            <div className='mt-5 mb-5 pb-5 d-none d-md-block'>
                <div className={`${styles.box} my-bg-green py-4 pe-3 rounded position-relative`}>
                    <div>
                        <Title title={title} />
                        <div className='text-white ps-5 pe-3 pb-5 w-75 small'>
                            <p>{text1}</p>
                            <p>{text2}</p>
                        </div>
                        <div className={`${styles.btn} position-absolute px-3 py-1 rounded-top-4 bg-light`}>
                            <ViewBtn link='/'/>
                        </div>
                    </div>
                    <img className={`${styles.img} position-absolute h-100 bottom-0`} src={img} alt="موسسه توان بخشی" />
                </div>
            </div>

            {/* for small screen */}
            <div className='mt-5 pt-5 d-md-none'>
                <div className={`${styles.box} my-bg-green pt-4 rounded position-relative`}>
                    <img className={`${styles.img} w-100 top-0`} src={img} alt="موسسه توان بخشی" />
                    <div className='px-4 mt-3'>
                        <Title title={title} />
                        <div className='text-white px-2 pb-4 w-100'>
                            <p>{text1}</p>
                            <p>{text2}</p>
                        </div>
                        <div className={`${styles.btn} px-3 py-1 mx-auto w-50 text-center rounded-top-4 bg-light`}>
                            <ViewBtn link='/'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BoxAbout;
