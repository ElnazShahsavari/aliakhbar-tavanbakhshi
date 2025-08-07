import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Navbar from './pages/Navbar';
import Header from './pages/Header';
import MainContent from './pages/MainContent';
import Footer from './pages/Footer';
import Mahsoolat from './pages/Mahsoolat';
import SinglePageMahsoolat from './pages/SinglePageMahsoolat';
import Pooyesh from './pages/Pooyesh';
import SinglePagePooyesh from './pages/SinglePagePooyesh';


import mahsoolatItems from './assets/information/mahsoolat';
import pooyeshItems from './assets/information/pooyesh';
import ComingSoon from './pages/ComingSoon';


function App() {
  return (
    <>
      <Navbar />

      <section className='container'>


        <Routes>
          <Route path='/' element={<>
            <Header />
            <MainContent /></>}>
          </Route>

          <Route path='Mahsoolat' element={<Mahsoolat items={mahsoolatItems} />} />
          <Route path="Mahsoolat/:productId" element={<SinglePageMahsoolat items={mahsoolatItems} />} />

          <Route path='Pooyesh' element={<Pooyesh items={pooyeshItems} />} />
          <Route path="Pooyesh/:productId" element={<SinglePagePooyesh items={pooyeshItems} />} />
          

          <Route path='ComingSoon' element={<ComingSoon />} />
        </Routes>

        <Footer />
      </section>
    </>
  );
}

export default App
