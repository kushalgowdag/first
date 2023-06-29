import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://evenpole.in:3001", credentials: "include" }),
    tagTypes: ["user", "product"],
    endpoints: builder => ({})
})
