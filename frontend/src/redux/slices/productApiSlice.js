import { apiSlice } from "../apiSlice";
import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";

const productAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
})

const initialState = productAdapter.getInitialState()

const productApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createProduct: builder.mutation({
            query: (product) => ({
                url: "/create/product",
                method: "POST",
                body: product
            }),
            invalidatesTags: ["product"]
        }),
        getProduct: builder.query({
            query: (id) => ({
                url: `/product/${id}`,
                method: "GET"
            }),
            providesTags: ["product"]
        }),
        getAllProducts: builder.query({
            query: () => ({
                url: "/products/all",
                method: "GET"
            }),
            providesTags: ["product"],
        })
    })
})

export const { useCreateProductMutation, useGetAllProductsQuery, useGetProductQuery } = productApiSlice

