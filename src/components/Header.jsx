import React from 'react';
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <header className='bg-purple-100 rounded-b-xl shadow-xl p-4 mb-8'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold text-purple-500 hover:text-purple-700 cursor-pointer'
        >
          Go Shop
        </Link>
        <nav className='flex'>
          <Link
            to='about'
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer'
          >
            About Us
          </Link>
          <Link
            to='contacts'
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer'
          >
            Contacts
          </Link>
          <Link
            to='/card' className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer select-none'
          >
            Shopping Card
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
