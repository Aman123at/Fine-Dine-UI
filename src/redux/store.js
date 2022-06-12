import {configureStore,ThunkAction,Action, getDefaultMiddleware} from '@reduxjs/toolkit';

import usersReducer from './slices/userSlice'
import categoryReducer from './slices/categorySlice'
import itemsReducer from './slices/itemSlice'
import cartsReducer from './slices/cartSlice'
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk';


export const store = configureStore({
    reducer: {
   
      users: usersReducer,
      categories: categoryReducer,
      items:itemsReducer,
      carts:cartsReducer
     
    },
    // middleware:[applyMiddleware(thunk),getDefaultMiddleware()]
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(thunk),
  });
  
