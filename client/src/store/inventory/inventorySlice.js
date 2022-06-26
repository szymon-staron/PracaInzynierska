import { createSlice } from "@reduxjs/toolkit";

const obj = {
    size: [],
    name: "",
    image: "",
    description: "",
    type: "",
    price: "",
    discount: "",
    category: "",
};

const initialState = {
    rolls: [],
    akcesoria: [],
    discount: [],
    loading: false,
    error: null,
};

export const inventorySlice = createSlice({
    name: "inventory",
    initialState,
    reducers: {
        inventoryLoading: (state) => {
            state.loading = true;
        },
        inventoryData: (state, action) => {
            state.rolls = action.payload;
        },
        inventoryError: (state) => {
            state.error = {
                error: true,
                message: "Podczas pobierania wystąpił błąd!",
            };
        },
    },
});

export const { inventoryData } = inventorySlice.actions;

export default inventorySlice.reducer;
