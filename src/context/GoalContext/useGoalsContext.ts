import { createContext } from "react";
import type { IGoalContext } from "../Context.type";

export const GoalContext = createContext<IGoalContext>({
  goals: [],
  goalsTransactionAmount: [],
});
