import { createContext } from "react";
import type { IBudgetContext } from "./BudgetContext.type";

export const BudgetContext = createContext<IBudgetContext>({});