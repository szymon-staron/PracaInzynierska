import { createSlice } from '@reduxjs/toolkit';

const obj = {
    size: [],
    name: '',
    image: '',
    description: '',
    type: '',
    price: '',
    discount: '',
    category: '',
};

const initialState = {
    rolls: [
        {
            size: [],
            name: 'Zoom Black 80',
            image:
                'https://cdn.shopify.com/s/files/1/0481/1119/0176/products/PR45BI5987_8...',
            description:
                'Powerslide One Zoom Black 80 Urban inline skates are wide & supportive...',
            type: 'urban skates',
            price: '129.99',
            discount: 'test',
            category: '',
        },
        {
            size: [20, 21.5, 22, 22.5],
            name: 'Name 1',
            image: 'https://cutt.ly/pPRW5tz',
            description: 'Powerslide One Zoom Black 80 Urban inline skates are wide & supportive',
            type: 'urban skates',
            price: '139.99',
            discount: 'test 1',
            category: 'rollerskate',
        },
        {
            size: [20, 21.5, 22, 22.5],
            name: 'Name 2',
            image: 'https://cutt.ly/pPRW5tz',
            description: 'Powerslide One Zoom Black 80 Urban inline skates are wide & supportive',
            type: 'urban skates',
            price: '149.99',
            discount: 'test 1',
            category: 'rollerskate',
        },
        {
            size: [20, 21.5, 22, 22.5],
            name: 'Name 3',
            image: 'https://cutt.ly/pPRW5tz',
            description: 'Powerslide One Zoom Black 80 Urban inline skates are wide & supportive',
            type: 'urban skates',
            price: '159.99',
            discount: 'test 1',
            category: 'rollerskate',
        },
    ],
    akcesoria: [],
    discount: [],
    loading: false,
    error: null,
};

export const inventorySlice = createSlice({
    name: 'inventory',
    initialState,
    reducers: {
        inventoryLoading: (state) => {
            state.loading = true;
        },
        inventoryData: (state, action) => {
            const { data } = payload.action;
            // const rolls = data.filder((el)=>el.)
        },
        inventoryError: (state) => {
            state.error = { error: true, message: 'Podczas pobierania wystąpił błąd!' }
        }
    },
});

export const { } = inventorySlice.actions;

export default inventorySlice.reducer;
