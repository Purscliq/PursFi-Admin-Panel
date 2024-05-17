import { ApiSlice } from "./Api";

const transactionSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.mutation({
      query: (body) => ({
        url: "/transaction/transaction/history",
        body,
        method: "POST",
      }),
    }),
    getWalletBalance: builder.query({
      query: () => ({
        url: "/transaction/wallet/total/balance",
        method: "GET",
      }),
    }),
    getTotalBalance: builder.query({
      query: () => ({
        url: "/transaction/wallet/total-balance",
        method: "GET",
      }),
    }),
    getDashboardDetails: builder.query({
      query: () => ({
        url: "/transaction/Wallet/dashboard",
        method: "GET",
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
} = transactionSlice;
