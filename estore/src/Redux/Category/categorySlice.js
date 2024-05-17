//here the file name is kept index.js so that we can import this file with the name of its folder since both are same.This approach is taken for other index.js files in this project.
import { createSlice } from "@reduxjs/toolkit";

const initState = ["Men", "Women", "Kids", "Offers","All"];

const categorySlice = createSlice({
    name: "Category",
    initialState : initState,
    reducers: {}
})

export default categorySlice;