import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    details: {
        name: '',
        surname: '',
        city: '',
    },
    history: [
        {
            id: '1',
            date: '10.11.2022 15:54',
            price: '43.44',
            amount: 1,
        },
        {
            id: '2',
            date: '3.2.2021 15:54',
            price: '55.44',
            amount: 5,
        },
        {
            id: '3',
            date: '5.11.2018 15:54',
            price: '183.44',
            amount: 2,
        },
    ],
};

export const userDetailsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateDetails: (state, action) => {
            state.details = action.payload;
        },
        loadingData: (state, action) => {
            state.detail;
        },
    },
});

export const { } = userDetailsSlice.actions;

export default userDetailsSlice.reducer;
