import { ApiSlice } from "./Api";

const transactionSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.mutation({
      query: (body) => ({
        url: "/transaction/history",
        body,
        method: "POST",
      }),
    }),
    getTransactionSummary: builder.query({
      query: () => ({
        url: "/transaction/dashboard",
      }),
    }),
    getWalletBalance: builder.query({
      query: () => ({
        url: "/wallet/total/balance",
        method: "GET",
      }),
    }),
    getTotalBalance: builder.query({
      query: () => ({
        url: "/wallet/total-balance",
        method: "GET",
      }),
    }),
    getDashboardDetails: builder.query({
      query: () => ({
        url: "/Wallet/dashboard",
        method: "GET",
      }),
    }),
    getTopClients: builder.query({
      query: () => ({
        url: "/transaction/top-clients",
      }),
    }),
  }),
});

export const {
  useGetTransactionsMutation,
  useGetDashboardDetailsQuery,
  useGetTotalBalanceQuery,
  useGetWalletBalanceQuery,
  useLazyGetDashboardDetailsQuery,
  useLazyGetTotalBalanceQuery,
  useLazyGetWalletBalanceQuery,
  useGetTransactionSummaryQuery,
  useLazyGetTransactionSummaryQuery,
  useGetTopClientsQuery,
  useLazyGetTopClientsQuery,
} = transactionSlice;
