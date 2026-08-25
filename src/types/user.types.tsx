import type { IGoal } from "./gola.types copy";
import type { ITransaction } from "./transaction.types";

export interface IUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  id: string;
  balanse: number;
  income: number;
  expense: number;
  transactions: ITransaction[];
  budget: {
    budgetBalanse: number;
  };
  goals: IGoal[];
}
