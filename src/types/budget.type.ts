import type { TCategory } from "./category.type";

export interface IBudgetForm {
  idUser: string;
  idPar: string;
  budgetName: string;
  budgetLimit: number;
  budgetSpent: number;
  category: TCategory;
  month: string;
}

export interface IBudgets {
  budgets: IBudgetForm[];
}

export type TOnSubmitFormBudget = (data: IBudgetForm) => void;