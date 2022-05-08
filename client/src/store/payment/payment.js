import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    customer: {},
    orders: [],
    totalPayment: 0,
    delivery: { type: 'odbiór osobisty', price: 0 },
    paymentSelection: 'Karta',
};

export const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        shippingAddress: (state, action) => { },
        paymentSelection: (state, action) => { },

        orderProducts: (state, action) => { },

        addDiscountCode: (state, action) => {
            state.discout = action.payload;
        },
    },
});

export const {
    shippingAddress,
    paymentSelection,
    orderProducts,
    addDiscountCode,
} = paymentSlice.actions;

export default paymentSlice.reducer;
