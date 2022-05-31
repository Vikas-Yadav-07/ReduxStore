import {createSlice} from '@reduxjs/toolkit'


const cartSLice = createSlice({
    name:'Cart',
    initialState:[],
    reducers:{
        addToCart(state , action){state.push(action.payload)},                  
        remove(state , action){
            return state.filter(item=> item.id !== action.payload)
        }
    }
});

export const { addToCart , remove } = cartSLice.actions;

export default cartSLice.reducer ;