import { getStorage } from "@/services/localStorage";
import type {
  ContextProviderProps,
  IBudgetContext,
  TGetResultListBudge,
  TGetTotalSpentTransactions,
  TGetTotalSumBudget,
} from "../Context.type";
import { BudgetContext } from "./useBudgetContext";
import { useAppSelector } from "@/app/hooks";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { useState } from "react";
import dayjs from "dayjs";
import type { TCategory } from "@/types/category.type";

const BudgetProvider = ({ children }: ContextProviderProps) => {
  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const listBudgets = useAppSelector((state) => state.budgets.budgets).filter(
    (budget) => budget.idUser === idUser,
  );
  const transactions = useAppSelector(
    (state) => state.transactions.transactions,
  ).filter((transaction) => transaction.idUser === idUser);

  const [month, setMonth] = useState(dayjs().format("YYYY-MM"));
  const [category, setCategory] = useState("All Categories");
  const lastMonth = dayjs(month).subtract(1, "month").format("YYYY-MM");

  const getResultListBudget: TGetResultListBudge = (
    listBudgets,
    spendByCategory,
    month,
  ) => {
    return listBudgets
      .filter((e) => {
        const filteredMonth = e.month === month;
        const filteredCategories =
          category !== "All Categories" ? e.category === category : e;

        return filteredMonth && filteredCategories;
      })
      .map((e) => {
        return {
          ...e,
          budgetSpent: spendByCategory[e.category] || 0,
        };
      });
  };

  const getTotalSumBudget: TGetTotalSumBudget = (resultFilterListBurget) => {
    return resultFilterListBurget.reduce(
      (acc, curent) => {
        if (curent.budgetLimit || curent.budgetSpent) {
          acc["totalBudget"] = (acc["totalBudget"] || 0) + curent.budgetLimit;
          acc["totalSpent"] = (acc["totalSpent"] || 0) + curent.budgetSpent;
          return acc;
        }
        return acc;
      },
      { totalBudget: 0, totalSpent: 0 },
    );
  };

  const getTotalSpentTransactions: TGetTotalSpentTransactions = (month) => {
    return transactions.reduce<Partial<Record<TCategory, number>>>(
      (acc, curent) => {
        if (
          curent.type === "Expense" &&
          dayjs(curent.date).format("YYYY-MM") === month
        ) {
          acc[curent.category] = (acc[curent.category] ?? 0) + curent.amount;
        }
        return acc;
      },
      {},
    );
  };

  const spentByCategory = getTotalSpentTransactions(month);
  const spentByCategoryLastMonth = getTotalSpentTransactions(lastMonth);
  const resultFilterListBurget = getResultListBudget(
    listBudgets,
    spentByCategory,
    month,
  );
  const resultFilterListBurgetLasMonth = getResultListBudget(
    listBudgets,
    spentByCategoryLastMonth,
    lastMonth,
  );
  const totalBudgetAmountMonth = getTotalSumBudget(resultFilterListBurget);
  const totalBudgetAmountLastMonth = getTotalSumBudget(
    resultFilterListBurgetLasMonth,
  );

  const value: IBudgetContext = {
    totalBudgetAmountMonth,
    totalBudgetAmountLastMonth,
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
