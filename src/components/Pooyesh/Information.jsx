import React from 'react';
import TitleOfTask from '../Filter/TitleOfTask';

const testInfo = {
    type : 'کپسول اکسیژن',
    startDate : '۱۴۰۴/۱۱/۱۶',
    endDate : '۱۴۰۴/۱۲/۱۸',
    length : '۲۳',
    progress : '64٪',
    maxPrice : '87،460،000',

}

const Information = () => {
    return (
        <div className=' bg-white rounded-3 p-3 mb-3'>
            <TitleOfTask title='اطلاعات پویش' />
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>دسته بندی:</span>
                <span className='fw-bold'>{testInfo.type}</span>
            </div>
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>تاریخ شروع:</span>
                <span className='fw-bold'>{testInfo.startDate}</span>
            </div>
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>تاریخ پایان:</span>
                <span className='fw-bold'>{testInfo.endDate}</span>
            </div>
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>تعداد خیرین شرکت کننده:</span>
                <span className='fw-bold'>{testInfo.length}</span>
            </div>
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>میزان پیشرفت پویش:</span>
                <span className='fw-bold'>{testInfo.progress}</span>
            </div>
            <div className={`my-2 p-3 bg-light rounded-3 d-flex justify-content-between small`}>
                <span>مبلغ کل نیازمندی(تومان):</span>
                <span className='fw-bold'>{testInfo.maxPrice}</span>
            </div>
        </div>
    );
}

export default Information;
