import { configureStore } from '@reduxjs/toolkit';
import {productsReducer} from './slices/products'
import cardItemsSlice from './slices/cardItems'



const store = configureStore({
  reducer: {
    products: productsReducer,
    cardItems: cardItemsSlice,
  },
});

export default store;
