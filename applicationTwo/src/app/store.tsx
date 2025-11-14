import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../features/product/productsSlice";
import { productsApi } from "../services/productsApi";
import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        product: ProductReducer,
        [productsApi.reducerPath]: productsApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware)
    },
    devTools: true
})
// const StoreProvider = ({ children }) => (
//     <Provider store={store}>{children}</Provider>
// );
export default store;
// export { store };