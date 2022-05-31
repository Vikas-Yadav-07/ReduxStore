import {configureStore} from '@reduxjs/toolkit';
import cartSLice from './cartSlice';
import  { products } from './productsSlice';



const store = configureStore({
    reducer:{
        cart : cartSLice , 
        products : products
 
    }
})

export default store;
