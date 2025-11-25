import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
    reducerPath: "signin",
    baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/auth/" }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: ({ username, password }) => (
                {
                    url: 'login',
                    method: 'post',
                    body: { username, password }
                }
            ),
            
        })
    })
})

export const { useLoginMutation } = loginApi;