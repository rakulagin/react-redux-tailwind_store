import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {CardItem} from "../components/CardItem.jsx";

export const CardPage = () => {

  const dispatch = useDispatch();
  const {cardItems} = useSelector(state => state.cardItems)

  return (
    <div className='container mx-auto'>
      {cardItems && cardItems.items.map((obj, index) => (
        <CardItem
          key={index}
          id={obj.id}
          image={obj.image}
          title={obj.title}
          price={obj.price}
          quantity={obj.quantity}
          amount={obj.amount}
          fullPage={true}
        />))}
    </div>
  )
}

