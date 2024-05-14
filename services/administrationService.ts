import { ApiSlice } from "./Api";

const administrationSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    createAdministration: builder.mutation({
      query: (body) => ({
        url: "/register/admin",
        method: "POST",
        body,
      }),
    }),
    createRole: builder.mutation({
      query: (body) => ({
        url: "/roles/create",
        method: "POST",
        body,
      }),
    }),
    updateRole: builder.mutation({
      query: (body) => ({
        url: "/roles/update",
        body,
        method: "POST",
      }),
    }),
    getRoles: builder.query({
      query: () => ({
        url: "/roles",
      }),
    }),
    getAdmins: builder.query({
      query: () => ({
        url: "/roles/admin",
      }),
    }),
    getAdminDetails: builder.query({
      query: ({ id }) => ({
        url: `/roles/admin/${id}`,
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
  useCreateAdministrationMutation,
  useCreateRoleMutation,
  useGetAdminDetailsQuery,
  useGetAdminsQuery,
  useGetRolesQuery,
  useUpdateRoleMutation,
  useLazyGetAdminDetailsQuery,
  useLazyGetAdminsQuery,
  useLazyGetRolesQuery,
} = administrationSlice;
