import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-purple-100 p-4 flex justify-between items-center fixed bottom-0 left-0 right-0 '>
      <div className='flex'>
        <a
          href='#'
          className='text-gray-700 text-lg mx-4 hover:text-purple-700 cursor-pointer'
        >
          <i className='fab fa-facebook'>fB</i>
        </a>
        <a
          href='#'
          className='text-gray-700 text-lg mx-4 hover:text-purple-700 cursor-pointer'
        >
          <i className='fab fa-twitter'>Tw</i>
        </a>
        <a
          href='#'
          className='text-gray-700 text-lg mx-4 hover:text-purple-700 cursor-pointer'
        >
          <i className='fab fa-instagram'>In</i>
        </a>
      </div>
      <p className='text-sm text-gray-700'>
        © 2023 Магазин. Все права защищены.
      </p>
    </footer>
  );
};

export default Footer;
