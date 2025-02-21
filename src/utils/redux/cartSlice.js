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
                state.items[index].quantity += 1;
            }
            else {
                payload.quantity = 1;
                state.items.push(payload);
            }

            state.totalItems += 1;
            
        },
        removeItem: (state, action) => {
            
            let index = state.items.findIndex(item => item.value.id === action.payload);

            if (index !== -1) {
                state.items[index].quantity -= 1;
            }
            
            state.totalItems -= 1;

        },
        clearCart: (state) => {
            state.items.length = 0;
            state.totalItems = 0;
        },
        clearItem: (state, action) => {

            let index = state.items.findIndex(item => item.value.id === action.payload);

            state.totalItems -= state.items[index].quantity;

            if (index !== -1) {
                state.items.splice(index, 1);
            }
            
        }
    }
})

export const {addItem, removeItem, clearCart, clearItem} = cartSlice.actions;

export default cartSlice.reducer;