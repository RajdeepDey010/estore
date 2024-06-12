import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategories = createAsyncThunk(
    'getCategories',
    ()=>{
        const categories = fetch("http://localhost:1010/productCategory") //here we connect the backend or pull the data frm backend using the backend endpoint inside fetch()
        .then((res) => res.json());
        return categories;
    }
)