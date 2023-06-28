import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001", credentials: "include" }),
    tagTypes: ["user", "product"],
    endpoints: builder => ({})
})
