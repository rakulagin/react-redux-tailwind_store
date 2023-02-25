import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import {Home, About, Contacts, FullItem, CardPage} from './pages'

function App() {
  return (
    <div className='bg-slate-50'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<FullItem />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/card' element={<CardPage />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
