import { configureStore } from "@reduxjs/toolkit";
import transactionsReducer from "@/features/transactions/transactionsSlice";
import budgetsReducer from "@/features/budget/budgetsSlice";

export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    budgets: budgetsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
