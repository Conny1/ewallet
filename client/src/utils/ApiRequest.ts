// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Balance, User } from "./Types";

// Define a service using a base URL and expected endpoints
export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["balance"],
  endpoints: (builder) => ({
    register: builder.mutation<void, User>({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<User, User>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),

    getBalace: builder.query<Balance, number>({
      query: (id) => `users/getbalance/${id}`,
      providesTags: ["balance"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useGetBalaceQuery } =
  walletApi;
