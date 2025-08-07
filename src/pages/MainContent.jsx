import React from 'react';
import ViewSegment from '../components/MainContent/ViewSegment';
import BoxInfo from '../components/MainContent/BoxInfo';
import BoxNews from '../components/MainContent/BoxNews';
import BoxViews from '../components/MainContent/BoxViews';
import BoxDonor from '../components/MainContent/BoxDonor';
import BoxParts from '../components/MainContent/BoxParts';
import BoxAbout from '../components/MainContent/BoxAbout';

import pooyeshItems from '../assets/information/pooyesh'
import tavanJooyanItems from '../assets/information/tavanJooyan';
import mahsoolatItems from '../assets/information/mahsoolat';
import akhbarItems from '../assets/information/akhbar'
import khayerItems from '../assets/information/khayer';
import bazdidItems from '../assets/information/bazdid';
import bakhshItems from '../assets/information/bakhsh';
import DepositBox from '../components/MainContent/DepositBox';
import BoxConsingned from '../components/MainContent/BoxConsingned';


const MainContent = () => {
    return (
        <section>
            <ViewSegment title={"پویش ها"} text={"هر قدم کوچک شما، حرکتی بزرگ برای دیگران!"} path='/Pooyesh'>
                <BoxInfo items={pooyeshItems} type={'pooyesh'}/>
            </ViewSegment>

            <ViewSegment title={"توانجویان"} text={"باهم دنیایی بدون محدودیت بسازیم!"} path='/'>
                <BoxInfo items={tavanJooyanItems} type={'tavan'}/>
            </ViewSegment>

            <BoxAbout />

            <ViewSegment title={"محصولات"} text={"دست سازه های توانجویان، نشانه خلاقیت و اراده!"} path='/Mahsoolat'>
                <BoxInfo items={mahsoolatItems} type={'mahsool'} miniText='دست سازه '/>
            </ViewSegment>

            <DepositBox />

            <ViewSegment title={"اخبار و اطلاعیه ها"} text={"تازه ترین اخبار و اطلاعیه های موسسه."} path='/'>
                <BoxNews items={akhbarItems} type='akhbar'/>
            </ViewSegment>

            <BoxConsingned />

            <ViewSegment title={"بازدید ها"} text={"با حمایت و عشق، به توانمندی میرسیم!"} path='/'>
                <BoxViews items={bazdidItems}/>
            </ViewSegment>

            <ViewSegment title={"خیرین"} text={"هر دست یاری، امیدی نو می آفریند."} path='/'>
                <BoxDonor items={khayerItems}/>
            </ViewSegment>

            <ViewSegment title={"بخش ها"} text={"بخش های مختلف موسسه"} btn={false}>
                <BoxParts items={bakhshItems}/>
            </ViewSegment>
        </section>
    );
}

export default MainContent;
