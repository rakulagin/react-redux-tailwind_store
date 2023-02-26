import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProducts} from '../redux/slices/products';
import {addItem} from '../redux/slices/cardItems'

import Item from '../components/Item';

const ListItems = () => {

  const dispatch = useDispatch();
  const {products} = useSelector(state => state.products);
  const isLoaded = products.status === 'loaded';

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const addToCard = ({id}) => {
    const item = products.items.find(el => el.id === id)
    dispatch(addItem({...item, quantity: 1}))
  }

  return (
    <div className='mb-24'>
      {isLoaded ? (
        products.items.map(obj => (
          <Item
            key={obj.id}
            id={obj.id}
            category={obj.category}
            description={obj.description}
            image={obj.image}
            price={obj.price}
            rating={obj.rating}
            title={obj.title}
            addToCard={addToCard}
          />
        ))
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default ListItems;

// category: "men's clothing"
// description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id: 1
// image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price: 109.95
// rating: {rate: 3.9, count: 120}
// title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"