import type { ITransactionForm } from "@/types/transaction.types";

export interface IButtonProps {
  type?: "submit" | "reset" | "button";
  textButton?: string;
  link?: string;
  isValid?: boolean;
}

export interface IButtonPaginations {
  listObject: ITransactionForm[]
}