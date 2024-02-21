import { ApiSlice } from "./Api";

const authSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/api/v1/login",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem("refresh", apiResponse.data?.refreshToken);
            localStorage.setItem("token", apiResponse.data?.token);
          })
          .catch(() => {});
      },
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: "/api/v1/login/refresh",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/api/v1/password/forgot",
        body,
        method: "POST",
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/api/v1/password/reset",
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/api/v1/password/change",
        method: "POST",
        body,
      }),
    }),
    getBusiness: builder.query({
      query: () => ({
        url: "/api/v1/business",
        method: "GET",
      }),
    }),
    getWallet: builder.query({
      query: () => ({
        url: "/api/v1/Wallet/balance",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/api/v1/user",
      }),
    }),
    // profile: builder.query({
    //   query: () => ({
    //     url: "user/me",
    //   }),
    //   providesTags: ["profile"],
    //   onQueryStarted(id, { dispatch, queryFulfilled }) {
    //     queryFulfilled
    //       .then((apiResponse) => {
    //         dispatch(updateUser(apiResponse?.data?.user));
    //       })
    //       .catch(() => {
    //         dispatch(logOut());
    //       });
    //   },
    // }),
  }),
});

export const {
  useLoginMutation,
  useRefreshMutation,
  useGetBusinessQuery,
  useGetWalletQuery,
  useGetUserQuery,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
} = authSlice;
