import type { TCategory } from "./category.type";

export interface IBudgetForm {
  idUser: string;
  valute: string;
  budgetName: string;
  budgetLimit: number;
  budgetSpent: number;
  category: TCategory;
  month: string;
}

export interface IBudgets {
  budgets: IBudgetForm[];
}