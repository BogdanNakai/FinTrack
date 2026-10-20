import { getStorage } from "@/services/localStorage";
import type { ContextProviderProps, IGoalContext } from "../Context.type";
import { GoalContext } from "./useGoalsContext";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { useAppSelector } from "@/app/hooks";
import dayjs from "dayjs";

const GoalProvider = ({ children }: ContextProviderProps) => {
  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const goals = useAppSelector((state) => state.goals.goals).filter(
    (goal) => goal.idUser === idUser,
  );
  const transaction = useAppSelector(
    (state) => state.transactions.transactions,
  ).filter((transaction) => transaction.idUser === idUser);

  const goalsTransactionAmount = goals.map((goal) => {
    const goalTrans = transaction.filter(
      (trans) =>
        trans.type === "Income" &&
        trans.category === goal.category &&
        dayjs(trans.date).isBetween(goal.startDate, goal.endDate, "day", "[]"),
    );
    const goalTransAmount = goalTrans.reduce((acc, current) => {
      acc = (acc ?? 0) + current.amount;
      return acc;
    }, 0);

    return {
      ...goal,
      savedAmount: goalTransAmount,
    };
  });
  
  const value: IGoalContext = {
    goals,
    goalsTransactionAmount,
  };

  return <GoalContext.Provider value={value}>{children}</GoalContext.Provider>;
};

export default GoalProvider;
