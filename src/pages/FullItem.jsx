import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios'

import Item from "../components/Item.jsx";

export const FullItem = () => {

  const {id} = useParams()

  const [item,setItem] = useState({})

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((res)=>{setItem(res.data)})
      .catch((err) => {
        console.warn(err)
      })
  }, []);

  return (
    <div className='container mx-auto'>
      <Item id={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
            category={item.category}
            price={item.price}
            rating={item.rating}
            isFull={true}
      />
    </div>
  )
}