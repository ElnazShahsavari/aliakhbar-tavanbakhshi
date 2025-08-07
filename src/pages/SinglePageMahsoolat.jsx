import React from 'react';
import { useParams } from 'react-router-dom';

import PagePath from '../components/PagePath';
import SinglePageExplain from '../components/SinglePageExplain';
import GetInvolved from '../components/Filter/GetInvolved';
import CommentList from '../components/comment/commentList';
import Price from '../components/Mahsoolat/price';
import Category from '../components/Filter/Category';
import Similar from '../components/Filter/Similar';
import Hashtag from '../components/Filter/Hashtag';

// دسته بندی ها
const parts = ['همه دسته بندی ها', 'صنایع دستی ترپینی', 'تابلو ها', 'بافتنی', 'چوبی']

const SinglePageMahsoolat = ({ items }) => {
        const { productId } = useParams();

        // پیدا کردن محصول مورد نظر
        const item = items.find(i => i.id.toString() === productId);

        if (!item) return <p>محصول پیدا نشد!</p>;

        return (
            <section>
                <PagePath title1={item.mainTitle} title2={item.title} />

                <div className='row mt-3'>
                    <div className='col col-6 col-md-3'>
                        <Price type={item.type} price={item.price} discountPrice={item.discountPrice} />
                        <Category title='دسته بندی ها' items={parts} />
                        <Similar title='محصولات مشابه' items={items} pathLink='Mahsoolat' />
                        <Hashtag item={item} />
                        <GetInvolved />
                    </div>

                    <div className='col col-6 col-md-9'>
                        <SinglePageExplain items={item} miniText='دست سازه:' Team={item.text}/>
                        <CommentList />
                    </div>
                </div>
            </section>
        );
    }

    export default SinglePageMahsoolat;
