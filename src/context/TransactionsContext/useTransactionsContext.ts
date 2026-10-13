import { createContext } from "react";
import type { ITransactionContext } from "../Context.type";

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
