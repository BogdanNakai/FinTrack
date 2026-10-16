import type { IBudgetForm } from "@/types/budget.type";
import type { TCategory } from "@/types/category.type";
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
  deleteTarget: string;
  setDeleteTarget: (isOpen: string) => void;
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
  totalBudgetAmountMonth: {
    [key: string]: number;
  };
  totalBudgetAmountLastMonth: {
    [key: string]: number;
  };
}

export type ContextProviderProps = {
  children: React.ReactNode;
};

export type TGetResultListBudge = (
  listBudgets: IBudgetForm[],
  spendByCategory: Partial<Record<TCategory, number>>,
  month: string,
) => IBudgetForm[];

export type TGetTotalSumBudget = (listBudgetlistBudget: IBudgetForm[]) => {
  totalBudget: number;
  totalSpent: number;
};
