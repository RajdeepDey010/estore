//here the file name is kept index.js so that we can import this file with the name of its folder since both are same.This approach is taken for other index.js files in this project.
import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";

const initState = {
    categories: [],
    status: "idle",
    error: ""
};

const categorySlice = createSlice({
    name: "Category",
    initialState : initState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state) => {
                state.status = "Loading..";
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.status = "Success";
                state.categories = action.payload;
            })
            .addCase(getCategories.rejected, (state, action) => {
                state.status = "Failed!";
                state.error = action.error.message;
            });
    }
})

export default categorySlice.reducer;