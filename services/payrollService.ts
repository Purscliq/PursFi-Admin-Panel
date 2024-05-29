import { ApiSlice } from "./Api";

const payrollSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["payroll" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getPayroll: builder.query({
      query: () => ({
        url: "/payroll",
      }),
    }),
    getPayrollById: builder.query({
      query: (id) => ({
        url: `/payroll/${id}/show`,
      }),
    }),
  }),
});

export const {
  useGetPayrollByIdQuery,
  useGetPayrollQuery,
  useLazyGetPayrollByIdQuery,
  useLazyGetPayrollQuery,
} = payrollSlice;
