import { createSlice } from "@reduxjs/toolkit";

const accordionData = [
    {
        category: "Men",
        items: ["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        category: "Women",
        items: ["Coats","Jackets","Party Wear","Shirts"]
    },
    {
        category: "Kids",
        items: ["Coats","Jackets","Party Wear","Shirts"]
    }
]
const accordionSlice = createSlice({
    name: "AccordionSlice",
    initialState: accordionData
})

export default accordionSlice;