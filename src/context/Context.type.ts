import type { IBudgetForm } from "@/types/budget.type";
import type { ITransactionForm } from "@/types/transaction.types";

export interface IModalProps {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  blockScroll: () => void;
  openModalMessageSuccess: boolean;
  setOpenModalMessageSuccess: (isOpen: boolean) => void;
  openModalMessageFailed: boolean;
  setOpenModalMessageFailed: (isOpen: boolean) => void;
  openModalMessageDelete: boolean;
  setOpenModalMessageDelete: (isOpen: boolean) => void;
  idRecord: string;
  setIdTransaction: (id: string) => void;
  openModalChanges: boolean;
  setOpenModalChanges: (isOpen: boolean) => void;
  curentRecardsList: number;
  setCurentRecardsList: (isOpen: number) => void;
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
  resultFilterListBurget: IBudgetForm[];
  category: string;
  setCategory: (isOpen: string) => void;
  month: string;
  setMonth: (isOpen: string) => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};
