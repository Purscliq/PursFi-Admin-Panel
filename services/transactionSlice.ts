import { ApiSlice } from "./Api";

const transactionSlice = ApiSlice.enhanceEndpoints({
  addTagTypes: ["profile" as const, "business" as const],
}).injectEndpoints({
  endpoints: (builder) => ({
    getTransactions: builder.query({
      query: () => ({
        url: "/api/v1/transaction/history",
      }),
    }),
  }),
});

export const {
    useGetTransactionsQuery,
    useLazyGetTransactionsQuery
} = transactionSlice;
