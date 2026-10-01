import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "@/features/transactions/transactionsSlice";
import budgetsReducer from "@/features/budget/budgetsSlice";
import goalsReducer from "@/features/goals/goalsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
    goals: goalsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
