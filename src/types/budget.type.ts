import type { TCategory } from "./category.type";

export interface IBudgetForm {
  budgetName: string;
  budgetLimit: number;
  category: TCategory;
}