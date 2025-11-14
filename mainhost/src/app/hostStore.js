import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/product/productsSlice";
import { productsApi } from "../services/productsApi";

const store = configureStore({
    reducer: {
        product: ProductReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(productsApi.middleware)
    },
    devTools: true
})
export default store;