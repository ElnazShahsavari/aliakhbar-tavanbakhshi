import React from 'react';
import styles from './BoxConsingned.module.css';
import ViewBtn from '../Buttons/ViewBtn';
import CardInfo from './CardInfo'

import items from '../../assets/information/kalaAmani';
import img from '../../assets/img/consingned.png'

const BoxConsingned = () => {
    return (
        <section className={` my-5 pb-5`}>
            <div className={`${styles.section} row my-bg-green rounded-3 p-3`}>

                {/* title and picture */}
                <div className='col col-12 col-md-4 col-lg-3 my-auto'>
                    <div className='row row-cols-2 row-cols-md-1 justify-content-center align-items-center mb-2'>

                        <div className="col">
                            <div className='text-white w-75 text-center mx-auto'>
                                <h4>کالاهای امانی</h4>
                                <span className='d-block mb-2'>کالای مورد نیازت رو از موسسه امانت بگیر!</span>
                                <ViewBtn btnClass='d-md-none text-white pt-2' />
                            </div>
                        </div>

                        <div className="col">
                            <div className='text-center'>
                                <img src={img} alt="consingned" className=' w-100' />
                                <ViewBtn btnClass='d-none d-md-block text-white' />
                            </div>
                        </div>

                    </div>
                </div>

                {/* items */}
                {items.slice(0, 2).map((item, index) => (
                    <div className='col col-6 col-md-4 col-lg-3 px-1 px-md-2' key={index}>
                        <CardInfo items={item} type='mahsool' />
                    </div>
                ))}
                <div className='col col-6 col-md-4 col-lg-3 d-none d-lg-block px-1 px-md-2'>
                    <CardInfo items={items[2]} type='mahsool' />
                </div>

            </div>
        </section>
    );
}

export default BoxConsingned;
