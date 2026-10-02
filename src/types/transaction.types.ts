import type { TCategory, TType } from "./category.type";

export interface ITransactionForm {
  description: string;
  date: string;
  category: TCategory;
  amount: number;
  type: TType;
  idUser: string;
  valute: string;
  idTransaction: string;
}

export interface ITransactions {
  transactions: ITransactionForm[];
}

export type TOnSubmitFormTransaction = (data: ITransactionForm) => void;