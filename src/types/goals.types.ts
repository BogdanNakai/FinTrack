import type { TCategory, TStatusGoal } from "./category.type";

export interface IGoalForm {
  idUser: string;
  valute: string;
  goalName: string;
  targetAmount: number;
  savedAmount: number;
  startDate: string;
  endDate: string;
  category: TCategory;
  status: TStatusGoal;
}

export interface IGoals {
  goals: IGoalForm[];
}

export type TOnSubmitFormGoal = (data: IGoalForm) => void;
