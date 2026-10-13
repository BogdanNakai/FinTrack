import type { ContextProviderProps } from "./BudgetContext.type";
import { BudgetContext } from "./useBudgetContext";

const BudgetProvider = ({ children }: ContextProviderProps) => {

  return <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>;
};

export default BudgetProvider