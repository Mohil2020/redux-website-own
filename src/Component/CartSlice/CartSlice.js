import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
    cartItems: 0,
    cart: [],
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.cartItems = action.payload;
        },  
        addtoCart: (state, action) => {
            state.cart.push(action.payload)
            console.log(state.cart);
        },
        deleteData: (state, action) => {
            state.cart.splice(action.payload, 1)
        }   
    },
})


export const { increment, decrement ,addtoCart,deleteData} = counterSlice.actions

export default counterSlice.reducer