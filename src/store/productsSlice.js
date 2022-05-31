import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const STATUSES = Object.freeze({
    IDLE : 'idle',
    LOADING : "loading ",
    ERROR : 'error',
})

const productSlice = createSlice(
    {
        name : 'products',
        initialState : {
            data: [],
            status : STATUSES.IDLE,
        },
        reducers : { 
            setProduct(state , action ){state.data = action.payload},
            setStatus( state , action){state.status = action.payload}
        },
        extraReducers : (builder)=>{
            builder.addCase(fetchProduct.pending , (state , action)=>{
                state.status  = STATUSES.LOADING;
                
            })    
            .addCase(fetchProduct.fulfilled, (state , action) => { 
                state.status = STATUSES.IDLE ; 
                state.data = action.payload ; 

            } )  
            .addCase(fetchProduct.rejected, (state , action )=> { 
                state.status = STATUSES.ERROR; 
                
            })  
        }
    }
)

export  const products = productSlice.reducer ; 
export  const { setProduct , setStatus } = productSlice.actions ; 


// Thunk

export const fetchProduct = createAsyncThunk('fetch/products' , async ()=>{
     const res = await fetch('https://fakestoreapi.com/products');
     const data = await res.json();
     return data;
})

// export function fetchProduct(){
//     return async function fetchProductThunl(dispatch, getState){
//         dispatch(setStatus(STATUSES.LOADING));
//         try{
//             const res = await fetch('https://fakestoreapi.com/products');
//             const data = await res.json();
//             dispatch(setProduct(data));
//             // console.log(data);
//             dispatch(setStatus(STATUSES.IDLE))
//         }catch(err) {
//             console.log(err);
//             dispatch(setStatus(STATUSES.ERROR));

//         }
//     }
// }