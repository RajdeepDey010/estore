import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cartItems: [],
    totalPrice: 0,
    totalItems: 0,
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        /* Below method is implementing the Add to Cart logic and it is an action so we export it as actions of the slice.This method is invoked in
        the products component where we have a addToCart function to monitor the user click on Add to Cart button and perform the adding of items to cart.*/
        addCartItem: (state, action) => {
            let flg = state.cartItems.find((item) => item.id === action.payload.id);

            if (!flg) {
                state.cartItems = [...state.cartItems, action.payload];
                state.totalPrice = state.totalPrice + action.payload.price;
                state.totalQuantity = ++state.totalQuantity;
                state.totalItems = ++state.totalItems;
            }
            //console.log(state.cartItems)
        },

        updateCart: (state, action) => {
            const index = action.payload.key;
            if (action.payload.operation === '+') {
                ++state.cartItems[index].quantity;
                state.totalPrice += action.payload.item.price;
                ++state.totalQuantity;
            }
            else {
                if (state.cartItems[index].quantity > 1) {
                    --state.cartItems[index].quantity
                    state.totalPrice -= action.payload.item.price;
                    --state.totalQuantity;
                }
            }
        },

        delCart: (state, action) => {
            let newCart = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.cartItems = newCart;
            state.totalPrice -= (action.payload.price * action.payload.quantity);
            state.totalQuantity -= action.payload.quantity;
            --state.totalItems;
        }
    }
})

export const { addCartItem, updateCart, delCart } = cartSlice.actions;
export default cartSlice.reducer;