import React from 'react';
import {useDispatch} from "react-redux";
import {removeItem} from '../redux/slices/cardItems'

export const CardItem = ({id, image, title, price, quantity, amount}) => {

  const dispatch = useDispatch();

  const onClickRemove = ({id}) => {
    dispatch(removeItem({id}))
  }

  return (
    <div className='grid grid-cols-8 gap-4 rounded-lg bg-white mb-2'>
      {image && <img src={image} className='max-h-12'/>}
      {title && <div className='col-span-3 text-sm'>{title}</div>}
      {quantity && <div>{quantity}</div>}
      {amount && <div className='text-purple-700 font-bold col-span-2'>$ {amount}</div>}
      <div className='cursor-pointer select-none' onClick={()=> onClickRemove({id})}>X</div>
    </div>
  );
};
