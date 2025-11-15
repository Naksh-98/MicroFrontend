import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../shared/types/mainProduct";

interface ProductSlice {
    cartItems: Product[];
    productsItems: Product[]; // Your full product list, if needed
    filter: string;
}

const initialState: ProductSlice = {
    cartItems: [],
    productsItems: [],
    filter: "",
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
        }
    }
});

export const { addToCart, clearCart, setFilter } = productSlice.actions;
export default productSlice.reducer;
