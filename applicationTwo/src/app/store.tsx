import React from 'react';
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productsSlice";
import { productsApi } from "../services/productsApi";
// import { Provider } from "react-redux";

const store = configureStore({
    reducer: {
        product: productReducer,
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
export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = ReturnType<typeof store.dispatch>
export default store;