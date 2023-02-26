import React from 'react';
import {useDispatch} from "react-redux";
import {removeItem} from '../redux/slices/cardItems'

export const CardItem = ({id, title, price, description, category, image, rating, quantity, amount, isFullPage}) => {

  const dispatch = useDispatch();

  const onClickRemove = ({id}) => {
    dispatch(removeItem({id}))
  }

  return (
    <>
      {isFullPage ? (
        <div className='grid grid-cols-12 gap-4 rounded-lg bg-white mb-8 p-4 h-96'>
          {image && <img src={image} alt='pic' className='max-h-80 col-span-4'/>}
          <div className='col-span-4'>
            {title && <div className='text-xl font-bold mb-4'>{title}</div>}
            <p className='text-gray-700 text-base mb-4'>{description}</p>
            <p>Category: {category}</p>
            <div className='flex'>
              <p className='mr-2'>Rating {rating.rate}</p>
              <p>Count {rating.count}</p>
            </div>
          </div>
          <div className='text-purple-700 font-bold col-span-1'>$ {price}</div>
          {quantity && <div>х{quantity}</div>}
          {amount && <div className='text-purple-700 font-bold col-span-1'>$ {amount}</div>}
          <div>
            <button className='bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600'
                    onClick={() => onClickRemove({id})}>Delete
            </button>
          </div>
        </div>
      ) : (
        <div className='grid grid-cols-8 gap-4 rounded-lg bg-white mb-2'>
          {image && <img src={image} alt='pic' className='max-h-12'/>}
          {title && <div className='col-span-3 text-sm'>{title}</div>}
          {quantity && <div>х{quantity}</div>}
          {amount && <div className='text-purple-700 font-bold col-span-2'>$ {amount}</div>}
          <div className='cursor-pointer select-none' onClick={() => onClickRemove({id})}>X</div>
        </div>
      )}
    </>
  );
};