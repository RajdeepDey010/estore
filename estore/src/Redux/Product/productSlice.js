import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./action";

const initialState = {
    products: [],
    status: "idle",
    error: ""
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        filterProducts: (state, action) => {

            const tmpFilterData = action.payload.products.filter((ele) => {
                return ele.category_id === action.payload.userFilterProd.id;
            })

            state.products = tmpFilterData;
        },

        filterPrice: (state, action) => {
            
            const tmpPriceFilter = action.payload.products.filter((ele) => {
                return ele.price >= action.payload.minPrice && ele.price <= action.payload.maxPrice;
            })

            state.products = tmpPriceFilter;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = "Loading..";
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.status = "Success";
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state, action) => {
                state.status = "Failed!";
                state.error = action.error.message;
            });
    }
})

export const { filterProducts,filterPrice } = productSlice.actions;
export default productSlice.reducer;