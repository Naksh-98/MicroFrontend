import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Product } from '../shared/types/mainProduct';

export const productsApi = createApi({
    reducerPath: "fetchProduct",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (build) => ({
        getProducts: build.query<Product[], void>({
            query: () => '/products',
        }),
    }),
})

export const { useGetProductsQuery } = productsApi; 