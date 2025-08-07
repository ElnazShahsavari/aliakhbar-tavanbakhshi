import React from 'react';
import { useParams } from 'react-router-dom';

import Information from '../components/Pooyesh/Information';
import PagePath from '../components/PagePath';
import Similar from '../components/Filter/Similar';
import Hashtag from '../components/Filter/Hashtag';
import GetInvolved from '../components/Filter/GetInvolved';
import SinglePageExplain from '../components/SinglePageExplain';
import CommentList from '../components/comment/commentList';
import Support from '../components/Pooyesh/Support';

const SinglePagePooyesh = ({items}) => {
    const { productId } = useParams();

    // پیدا کردن پویش مورد نظر
    const item = items.find(i => i.id.toString() === productId);

    if (!item) return <p>محصول پیدا نشد!</p>;

    return (
        <section>
            <PagePath title1='پویش' title2={item.title} />

            <div className='row mt-4'>
                <div className='col col-6 col-md-3'>
                    <Information />
                    <Similar title='محصولات مشابه' items={items} pathLink='Pooyesh' />
                    <Hashtag item={item} />
                    <GetInvolved />
                </div>

                <div className='col col-6 col-md-9'>
                    <SinglePageExplain items={item} Team={item.donors} miniText='خیرین یاری دهنده:'>
                        <Support />
                    </SinglePageExplain>
                    <CommentList />
                </div>
            </div>
        </section>
    );
}

export default SinglePagePooyesh;
