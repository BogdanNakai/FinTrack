import { createContext } from "react";
import type { IBudgetContext } from "../Context.type";

export const BudgetContext = createContext<IBudgetContext>({
  resultFilterListBurget: [],
  category: "",
  setCategory: () => undefined,
  month: "",
  setMonth: () => undefined,
  totalBudgetAmountMonth: {},
  totalBudgetAmountLastMonth: {},
});
