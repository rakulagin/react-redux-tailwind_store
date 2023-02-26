import React from 'react';
import {Link} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {toggleCardVisible} from "../redux/slices/cardItems.js";

const Header = () => {

  const dispatch = useDispatch()

  const handlerVisible = () => {
    dispatch(toggleCardVisible())
  }

// const toggleCardVisible = () => {
//   setCardVisible(!isCardVisible);
// }

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
          <a
            className='text-gray-700 text-base font-medium mx-4 hover:text-purple-700 cursor-pointer select-none'
            onClick={handlerVisible}
          >
            Shopping Card
          </a>
          {/*{isCardVisible && <Card />}*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;
