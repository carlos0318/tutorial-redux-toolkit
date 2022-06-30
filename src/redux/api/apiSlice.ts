import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query//react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => `/products`
        }),
        getProduct: builder.query({
            query: (id) => `/products/${id}`
        })
    })
})

export const { useGetProductsQuery, useGetProductQuery } = apiSlice