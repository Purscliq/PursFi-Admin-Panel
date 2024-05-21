import { ApiSlice } from "./Api";
import { updateUser, logOut } from "@/store/userSlice";

const authSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem("token", apiResponse.data?.data?.token);
          })
          .catch(() => {});
      },
    }),
    refresh: builder.mutation({
      query: (body) => ({
        url: "/login/refresh",
        method: "POST",
        body,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (body) => ({
        url: "/forgot-password",
        body,
        method: "POST",
      }),
    }),
    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/reset-password",
        method: "POST",
        body,
      }),
    }),
    changePassword: builder.mutation({
      query: (body) => ({
        url: "/settings/change-password",
        method: "PUT",
        body,
      }),
    }),
    getBusiness: builder.query({
      query: () => ({
        url: "/business",
        method: "GET",
      }),
    }),
    getWallet: builder.query({
      query: () => ({
        url: "/Wallet/total/balance",
        method: "GET",
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/profile",
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            dispatch(updateUser(apiResponse?.data?.data));
          })
          .catch(() => {
            dispatch(logOut());
          });
      },
    }),
    updateProfile: builder.mutation({
      query: (body) => ({
        url: "/settings/update-profile",
        body,
        method: "PUT",
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
