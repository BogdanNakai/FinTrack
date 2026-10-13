import { getStorage } from "@/services/localStorage";
import type { ContextProviderProps, IBudgetContext } from "../Context.type";
import { BudgetContext } from "./useBudgetContext";
import { useAppSelector } from "@/app/hooks";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { useState } from "react";
import dayjs from "dayjs";

const BudgetProvider = ({ children }: ContextProviderProps) => {
  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const listBudgets = useAppSelector((state) => state.budgets.budgets).filter(
    (budget) => budget.idUser === idUser,
  );
  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
  const [category, setCategory] = useState("All Categories");

  const resultFilterListBurget = listBudgets.filter((e) => {
    const filteredMonth = e.month === month;
    const filteredCategories =
      category !== "All Categories" ? e.category === category : e;

    return filteredMonth && filteredCategories;
  });

  const value: IBudgetContext = {
    resultFilterListBurget,
    category,
    setCategory,
    month,
    setMonth,
  };

  return (
    <BudgetContext.Provider value={value}>{children}</BudgetContext.Provider>
  );
};

export default BudgetProvider;
