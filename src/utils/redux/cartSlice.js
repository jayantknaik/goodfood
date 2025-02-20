import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalItems: 0
    },
    reducers: {
        addItem: (state, action) => {
            
            let index = state.items.findIndex(item => item.value.id === action.payload.value.id);
            let payload = action.payload;

            if (index !== -1) {
                state.items[index].quantity = state.items[index].quantity + 1;
            }
            else {
                payload.quantity = 1;
                state.items.push(payload);
            }

            state.totalItems = state.totalItems + 1;

        },
        removeItem: (state, action) => {
            
            let index = state.items.findIndex(item => item.value.id === action.payload);

            if (index !== -1) {
                state.items.splice(index, 1);
            }

        },
        clearCart: (state) => {
            state.items.length = 0;
            state.totalItems = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;