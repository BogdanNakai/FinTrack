import type { TCategory, TStatusGoal } from "./category.type";

export interface IGoalForm {
  goalName: string;
  targetAmount: number;
  startDate: string;
  endDate: string;
  category: TCategory;
  status: TStatusGoal;
}
