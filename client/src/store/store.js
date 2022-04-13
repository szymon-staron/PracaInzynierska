import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import inventoryReducer from './inventory/inventorySlice';
import paymentReducer from './payment/payment';
import orderReducer from './order/order';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        inventory: inventoryReducer,
        payment: paymentReducer,
        order: orderReducer,
    },
});
