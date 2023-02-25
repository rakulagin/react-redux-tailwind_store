import React from 'react';

export const CardItem = ({id, image, title, price, quantity}) => {


  return (
    <div className='grid grid-cols-8 gap-4 rounded-lg bg-white mb-2'>
      {image && <img src={image} className='max-h-12'/>}
      {title && <div className='col-span-4'>{title}</div>}
      {quantity && <div>{quantity}</div>}
      {price && <div className='text-purple-700 font-bold col-span-2'>$ {price}</div>}
    </div>
  );
};
