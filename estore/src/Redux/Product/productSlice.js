import { createSlice } from "@reduxjs/toolkit";

const initData = [
    {
        pName: "Jacket",
        price: 267,
        img: "shop-1.jpg"
    }, {
        pName: "Bag",
        price: 67,
        img: "shop-2.jpg"
    }, {
        pName: "Dress",
        price: 27,
        img: "shop-3.jpg"
    }, {
        pName: "Jeans",
        price: 47,
        img: "shop-4.jpg"
    }, {
        pName: "Shoes",
        price: 5267,
        img: "shop-5.jpg"
    },
]

const productSlice = createSlice({
    name : "Products",
    initialState : initData
})

export default productSlice;