import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import { Card } from './card';

const Header = () => {
const [isCardVisible, setCardVisible] = useState(true)

const toggleCardVisible = () => {
  setCardVisible(!isCardVisible);
}

  return (
    <header className='bg-purple-100 rounded-b-xl shadow-xl p-4 mb-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold text-purple-700 hover:text-purple-700 cursor-pointer'
        >
          Магазин
        </Link>
        <nav className='flex'>
          <Link
            to='about'
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer'
          >
            О нас
          </Link>
          <Link
            to='contacts'
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer'
          >
            Контакты
          </Link>
          <a
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer select-none'
            onClick={toggleCardVisible}
          >
            Корзина
          </a>
          {isCardVisible && <Card />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
