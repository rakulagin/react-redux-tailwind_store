import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from './slices/products'
import {cardItemsReducer} from './slices/cardItems'



const store = configureStore({
  reducer: {
    products: productsReducer,
    cardItems: cardItemsReducer,
  },
});

export default store;
