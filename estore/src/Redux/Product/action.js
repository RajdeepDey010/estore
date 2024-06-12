import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async ()=>{
        const prodData = fetch('http://localhost:1010/productCategory/estoreProducts')
        .then((res) => res.json());

        return prodData;
    }
)