import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    amongOfProduct: 0,
    totalPayment: 0,
}
export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addProduct: (state, action) => {

        },
        removeProduct: (state, action) => {

        },
        upgradeAmong: (state, action) => {

        },



    }




})
export const { } = orderSlice.actions;

export default orderSlice.reducer;

