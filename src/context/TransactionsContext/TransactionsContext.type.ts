import type { ITransactionForm } from "@/types/transaction.types";

export interface ITransactionContext {
  transactions: ITransactionForm[];
  resultTransactions: ITransactionForm[];
  dateRange: string;
  transactionType: string;
  sortPrice: string;
  setTransactionType: (isOpen: string) => void;
  setDateRange: (isOpen: string) => void;
  setSortPrice: (isOpen: string) => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};
