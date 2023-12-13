// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Balance, Email, Pending, User } from "./Types";

// Define a service using a base URL and expected endpoints
export const walletApi = createApi({
  reducerPath: "walletApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      // const token = (getState() as RootState).AuthSlice.authDetails?.tokens;
      const authDet = localStorage.getItem("user");

      if (authDet) {
        const token = JSON.parse(authDet).tokens;

        // If we have a token set in state, let's assume that we should be passing it.
        if (token) {
          headers.set("authorization", `Bearer ${token}`);
        }
      }
      return headers;
    },
  }),
  tagTypes: ["balance", "pending"],
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

    getPending: builder.query<Pending[], number>({
      query: (id) => `users/pending/${id}`,
      providesTags: ["pending"],
    }),

    sendmoney: builder.mutation<void, Balance>({
      query: (body) => ({
        url: "/users/sendmoney",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["balance"],
    }),

    addtopending: builder.mutation<void, Pending>({
      query: (body) => ({
        url: "/users/addpending",
        method: "POST",
        body,
      }),
      invalidatesTags: ["pending"],
    }),

    receivemoney: builder.mutation<void, Balance>({
      query: (body) => ({
        url: "/users/receivemoney",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["pending"],
    }),
    pendingtransacrion: builder.query<Pending[], number>({
      query: (id) => `users/pendingtransacrion/${id}`,
      providesTags: ["pending"],
    }),

    requestmoney: builder.mutation<void, Email>({
      query: (body) => ({
        url: `/users/request/${body.id}`,
        method: "POST",
        body,
      }),
    }),

    inviteUsers: builder.mutation<void, Email>({
      query: (body) => ({
        url: `/users/inviteuser`,
        method: "POST",
        body,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useLoginMutation,
  useRegisterMutation,
  useGetBalaceQuery,
  useGetPendingQuery,
  useAddtopendingMutation,
  useSendmoneyMutation,
  useReceivemoneyMutation,
  usePendingtransacrionQuery,
  useInviteUsersMutation,
  useRequestmoneyMutation,
} = walletApi;
