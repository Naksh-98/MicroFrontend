import { configureStore } from "@reduxjs/toolkit";
// import ProductReducer from "../features/product/productsSlice";
import { loginApi } from "../services/loginApi";

const store = configureStore({
    reducer: {
        // product: ProductReducer,
        [loginApi.reducerPath]: loginApi.reducer
    },
    middleware: (getDefaultMiddleware) =>{
        return getDefaultMiddleware().concat(loginApi.middleware)
    },
    devTools: true
})
export default store;