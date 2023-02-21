import React from 'react'
import { Routes, Route } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import {Home, About, Contacts} from './pages'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
