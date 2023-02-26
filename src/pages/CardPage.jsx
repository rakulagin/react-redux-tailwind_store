import React from 'react'
import {useDispatch, useSelector} from "react-redux";

import {CardItem} from "../components/CardItem.jsx";

export const CardPage = () => {

  const dispatch = useDispatch();
  const {cardItems} = useSelector(state => state.cardItems)

  return (
    <div className='container mx-auto pb-24'>
      {cardItems && cardItems.items.map((obj, index) => (
        <CardItem
          key={index}
          id={obj.id}
          title={obj.title}
          price={obj.price}
          description={obj.description}
          category={obj.category}
          image={obj.image}
          rating={obj.rating}
          quantity={obj.quantity}
          amount={obj.amount}
          isFullPage={true}
        />))}
    </div>
  )
}

