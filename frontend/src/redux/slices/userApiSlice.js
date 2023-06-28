import { apiSlice } from "../apiSlice"

const userApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        createUser: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body: user,
            }),
            invalidatesTag: ["user"]
        }),
        login: builder.mutation({
            query: (login) => ({
                url: "/login",
                method: "POST",
                body: login
            }),
            invalidatesTag: ["user"]
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout",
                method: "POST"
            }),
            invalidatesTag: ["user"]
        }),
        myDetails: builder.query({
            query: () => "/my/profile",
            providesTags: ["user"]
        })
    })
})

export const {  useCreateUserMutation,
                useLoginMutation, 
                useLogoutMutation, 
                useMyDetailsQuery } = userApiSlice