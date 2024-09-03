import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../Category/categorySlice';
import productSlice from '../Product/productSlice';
import cartSlice from '../Cart/cartSlice';

export const store = configureStore({
    reducer: {
      categoryReducer: categorySlice,
      productReducer: productSlice,
      cartReducer: cartSlice
    }
  })
  