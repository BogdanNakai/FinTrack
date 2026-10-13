import { createContext } from "react";
import type { ITransactionContext } from "./TransactionsContext.type";

export const TransactionContext = createContext<ITransactionContext>({
  transactions: [],
  resultTransactions: [],
  dateRange: "",
  transactionType: "",
  sortPrice: "",
  setTransactionType: () => undefined,
  setDateRange: () => undefined,
  setSortPrice: () => undefined,
});
