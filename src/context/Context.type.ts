import type { IBudgetForm } from "@/types/budget.type";
import type { ITransactionForm } from "@/types/transaction.types";

export interface IModalProps {
  openModalTransactions: boolean;
  setOpenModalTransactions: (isOpen: boolean) => void;
  blockScroll: () => void;
  openModalMessageSuccess: boolean;
  setOpenModalMessageSuccess: (isOpen: boolean) => void;
  openModalMessageFailed: boolean;
  setOpenModalMessageFailed: (isOpen: boolean) => void;
  openModalMessageDelete: boolean;
  setOpenModalMessageDelete: (isOpen: boolean) => void;
  idTransaction: string;
  setIdTransaction: (id: string) => void;
  openModalTransactionChanges: boolean;
  setOpenModalTransactionChanges: (isOpen: boolean) => void;
  curentPageTransactions: number;
  setCurentPageTransactions: (isOpen: number) => void;
}

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

export interface IBudgetContext {
  listBudgets: IBudgetForm[];
}

export type ContextProviderProps = {
  children: React.ReactNode;
};