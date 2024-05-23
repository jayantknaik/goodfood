import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        restaurants: [
            {
                key: "restaurants id",
                value: {
                    key: "item id",
                    value: {
                        id: "",
                        name: "",
                        desc: "",
                        quantity: "",
                        img: ""
                    }
                }
            }
        ]
    },
    reducers: {
        addItem: (state, action) => {

            state.items.push(action.payload);
            // state.restaurants.push(action.payload);

        },
        removeItem: (state, action) => {
            
            let index = state.items.findIndex(item => item.card.info.id === action.payload);

            if (index !== -1) {
                state.items.splice(index, 1);
            }

        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;