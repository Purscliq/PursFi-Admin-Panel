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
    getMembers: builder.query({
      query: (body) => ({
        url: "/members",
        params: {
          count: body?.count,
          page: body?.page,
          type: body?.type,
        },
      }),
    }),
    getSingleMember: builder.query({
      query: (id) => ({
        url: `/members/${id}`,
      }),
    }),
    createMember: builder.mutation({
      query: (body) => ({
        url: "/members",
        body,
        method: "POST",
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
  useGetMembersQuery,
  useLazyGetMembersQuery,
  useCreateMemberMutation,
  useGetSingleMemberQuery,
  useLazyGetSingleMemberQuery,
} = administrationSlice;
