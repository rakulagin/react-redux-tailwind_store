import React from 'react';
import {useSelector} from "react-redux";

import {CardItem} from "./CardItem.jsx";


export const Card = () => {

  const {cardItems} = useSelector(state => state.cardItems)

  const totalPrice = cardItems.items.reduce((acc, curr) => acc + curr.price, 0)

  console.log(totalPrice)

  return (
    <div className='border-4 border-purple-500 rounded-lg bg-slate-50 absolute top-20 w-1/3 right-10 p-4'>

      {cardItems.items.length ?
        (<div className='grid grid-cols-8 gap-4 rounded-lg bg-white mb-2'>
            <div>Pic</div>
            <div className='col-span-4'>Title</div>
            <div>Qty</div>
            <div className='col-span-2'>Price</div>
          </div>
        ) : (<div>
          Card Empty!
        </div>)}

      {cardItems && cardItems.items.map((obj, index) => (
        <CardItem
          key={index}
          id={obj.id}
          image={obj.image}
          title={obj.title}
          price={obj.price}
          quantity={obj.quantity}
        />
      ))}
      {cardItems.items.length > 0 &&
        <>
          <div className='grid grid-cols-8 gap-4 mb-2'>
            <div className='col-span-6 justify-self-end font-bold'>Total</div>
            <div className='col-span-2 font-bold text-purple-700'>$ {totalPrice}</div>
          </div>
          <div className='flex justify-between'>
            <button className='bg-white text-purple-500 px-4 py-2 rounded-md font-medium border-2 border-purple-500 hover:border-purple-700 hover:bg-purple-500 hover:text-white'>
              Clear Card
            </button>
            <button className='bg-purple-500 text-white px-4 py-2 rounded-md font-medium hover:bg-purple-600'>
              Go to Card
            </button>
          </div>
        </>
      }
    </div>
  );
};
