import React, { Children } from 'react';
import styles from './CardInfo.module.css';
import CardInfoPooyesh from './CardInfoPooyesh';
import SupportBtn from '../Buttons/SupportBtn';

// کارت برای عکس و توضیحات
const CardInfo = ({ items, type, miniText , cardClass = '' }) => {
    return (
        <div className={`${styles.card} w-100 h-100 p-2 p-md-3 border-muted d-flex flex-column justify-content-between`}>

            <div>
                <img src={items.src} alt={items.title} className='rounded-4 w-100' height={'185px'} />

                <div className={`py-1 pt-3 ${cardClass}`}>
                    <h6 className='fw-bold'>{items.title}</h6>
                    <p className='text-muted py-1 pt-2 small fw-medium'>{miniText}{items.text}</p>
                </div>
            </div>

            <div className='d-flex w-100 align-items-center  bottom-0'>
                {type == 'pooyesh' && <CardInfoPooyesh items={items} link={`/Pooyesh/${items.id}`} />}
                {type == 'tavan' && <SupportBtn title={items.btnTitle} />}
                {type == 'mahsool' && <>
                    <p className='w-50 text-center fw-bold ms-2 mt-2'>{items.price}تومان</p>
                    <SupportBtn title={items.btnTitle} link={`/Mahsoolat/${items.id}`} />
                </>}
                {type == 'akhbar' && <span className='text-muted small fw-medium'>{items.date}</span>}
            </div>


        </div>
    );
}

export default CardInfo;
