import { ApiSlice } from "./Api";
import { updateUser, logOut } from "@/store/userSlice";

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
        url: "login/refresh",
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: "register/user",
        method: "POST",
        body,
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            localStorage.setItem(
              "refresh",
              apiResponse?.data?.token?.refreshToken
            );
            localStorage.setItem("token", apiResponse.data?.token?.token);
          })
          .catch(() => {});
      },
    }),
    profile: builder.query({
      query: () => ({
        url: "user/me",
      }),
      providesTags: ["profile"],
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        queryFulfilled
          .then((apiResponse) => {
            dispatch(updateUser(apiResponse?.data?.user));
          })
          .catch(() => {
            dispatch(logOut());
          });
      },
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useProfileQuery,
  useLazyProfileQuery,
  useRefreshMutation,
} = authSlice;
