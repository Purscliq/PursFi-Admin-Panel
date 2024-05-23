import { ApiSlice } from "./Api";

const administrationSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["role" as const, "member" as const],
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
        url: "/roles",
        method: "POST",
        body,
      }),
      invalidatesTags: ["role"],
    }),
    updateRole: builder.mutation({
      query: (body) => ({
        url: `/roles/${body?.id}`,
        body: body?.body,
        method: "PUT",
      }),
      invalidatesTags: ["role"],
    }),
    getRoles: builder.query({
      query: () => ({
        url: "/roles",
      }),
      providesTags: ["role"],
      transformResponse: (apiResponse: Record<string, any>) => {
        return apiResponse?.data?.map((e: any) => ({
          ...e,
          value: e?.name,
          label: e?.name,
        }));
      },
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
          count: 10,
          page: body?.page,
          type: body?.type,
        },
      }),
      providesTags: ["member"],
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
      invalidatesTags: ["member"],
    }),
    getPermissions: builder.query({
      query: () => ({
        url: "/permissions",
      }),
      transformResponse: (apiResponse: Record<string, any>) => {
        return apiResponse?.data?.map((e: any) => ({
          ...e,
          value: e?.id,
          label: e?.name,
        }));
      },
    }),
    updateMemberRole: builder.mutation({
      query: (body) => ({
        url: `members/${body?.id}`,
        body: body?.body,
        method: "PUT",
      }),
      invalidatesTags: ["member"],
    }),
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
  useGetPermissionsQuery,
  useUpdateMemberRoleMutation,
} = administrationSlice;
