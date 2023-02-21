import React from 'react';

const Item = ({ id, title, image, description, price, category}) => {

  const isFull = false
  return (
    <div className='p-4 rounded-lg shadow-md hover:shadow-xl'>
      <h2 className='text-xl h-24 font-bold mb-2'>{title}1212</h2>
      <img src={image} alt='' className='mx-auto h-52 mb-4' />
      <p className='text-gray-700 text-base mb-4'>Category: {category}</p>
      {isFull && <p className='text-gray-700 text-base mb-4'>{description}</p>}
      <div className='flex justify-between items-center'>
        <span className='text-purple-700 text-lg font-bold mb-4'>
          $ {price}
        </span>
        <button className='bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600'>
          Add to Cart
        </button>
      </div>
    </div>
  );
  // return <div className='w-full h-96 border'>ITEM</div>;
};

export default Item;

// id: 1
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// category: "men's clothing"
// price: 109.95
// rating: {rate: 3.9, count: 120}
