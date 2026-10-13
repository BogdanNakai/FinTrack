import { createContext } from "react";
import type { IBudgetContext } from "../Context.type";

export const BudgetContext = createContext<IBudgetContext>({});