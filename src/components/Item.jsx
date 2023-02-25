import React from 'react';
import {Link} from "react-router-dom";

const Item = ({id, title, image, description, price, category, rating, isFull, addButton}) => {

  const addToCard = () => {
    console.log(id)
    console.log(title)
  }

  return (
    <div className='bg-white p-4 mb-4 rounded-lg shadow-md hover:shadow-xl flex'>
      <div className='h-52 w-52 mr-8'>
        <img src={image} alt='' className='h-52'/>
      </div>
      <div className='grow flex flex-col justify-around'>
        {isFull ? (
          <h2 className='text-xl pt-4 font-bold mb-2'>{title}</h2>
        ) : (
          <Link to={`/products/${id}`} className='text-xl h-24 font-bold mb-2 hover:text-purple-600'>{title}</Link>
        )}
        {isFull && <p className='text-gray-700 text-base mb-4'>{description}</p>}
        <div className='flex gap-2'>
          {rating && <span>Rating : {rating.rate}</span>}
          {rating && <span>Voices : {rating.count}</span>}
        </div>
      </div>
      <div className='flex flex-col justify-between pt-4'>
          <span className='text-purple-700 text-lg font-bold mb-4 text-right'>
            $ {price}
          </span>
        <button onClick={() => addButton(id)}
                className='bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600'>
          Add to Cart
        </button>
      </div>

      {/*{isFull ? (*/}
      {/*  <h2 className='text-xl h-24 font-bold mb-2'>{title}</h2>*/}
      {/*) : (*/}
      {/*  <Link to={`/products/${id}`} className='text-xl h-24 font-bold mb-2 hover:text-purple-600'>{title}</Link>*/}
      {/*)}*/}
      {/*<img src={image} alt='' className='mx-auto h-52 mb-4'/>*/}
      {/*{category && <p className='text-gray-700 text-base mb-4'>Category: {category}</p>}*/}
      {/*{isFull && <p className='text-gray-700 text-base mb-4'>{description}</p>}*/}
      {/*<div className='flex justify-between items-center'>*/}
      {/*  <span className='text-purple-700 text-lg font-bold mb-4'>*/}
      {/*    $ {price}*/}
      {/*  </span>*/}
      {/*  {isFull && <div className='flex gap-2'>*/}
      {/*    {rating && <span>Rating : {rating.rate}</span>}*/}
      {/*    {rating && <span>Voices : {rating.count}</span>}*/}
      {/*  </div>}*/}
      {/*  <button onClick={()=>addButton(id)} className='bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600'>*/}
      {/*    Add to Cart*/}
      {/*  </button>*/}
      {/*</div>*/}


    </div>
  );
};

export default Item;

// id: 1
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// category: "men's clothing"
// price: 109.95
// rating: {rate: 3.9, count: 120}
