import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../shared/types/mainProduct";

interface ProductSlice {
    cartItems: Product[];
    productsItems: Product[];
    filter: string;
    filterRange: number[];
    nameFilter:string
}

const initialState: ProductSlice = {
    cartItems: [],
    productsItems: [],
    filter: "",
    filterRange: [],
    nameFilter:""
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cartItems.push(action.payload);
        },
        clearCart: (state) => {
            state.cartItems = [];
        },
        setFilter: (state, action: PayloadAction<string>) => {
            state.filter = action.payload;
        },
        setFilterRange: (state, action: PayloadAction<number[]>) => {
            state.filterRange = action.payload;
        },
        filterByName:(state, action: PayloadAction<string>) =>{
            state.nameFilter = action.payload
        }
    }
});

export const { addToCart, clearCart, setFilter, setFilterRange, filterByName } = productSlice.actions;
export default productSlice.reducer;
