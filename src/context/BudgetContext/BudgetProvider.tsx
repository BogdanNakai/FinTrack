import { getStorage } from "@/services/localStorage";
import type { ContextProviderProps, IBudgetContext } from "../Context.type";
import { BudgetContext } from "./useBudgetContext";
import { useAppSelector } from "@/app/hooks";
import { STORAGE_KEYS } from "@/services/storageKeys";

const BudgetProvider = ({ children }: ContextProviderProps) => {

    const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
    const listBudgets = useAppSelector((state) => state.budgets.budgets).filter(
      (budget) => budget.idUser === idUser,
  );

  const value: IBudgetContext = {
    listBudgets,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};

export default BudgetProvider;
