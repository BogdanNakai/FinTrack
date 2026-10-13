import type { ContextProviderProps, IBudgetContext } from "../Context.type";
import { BudgetContext } from "./useBudgetContext";

const BudgetProvider = ({ children }: ContextProviderProps) => {
  const value: IBudgetContext = {};

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};

export default BudgetProvider;
