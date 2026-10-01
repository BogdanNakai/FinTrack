import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getStorage, setStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { IBudgetForm, IBudgets } from "@/types/budget.type";


const { BUDGETS } = STORAGE_KEYS;

const storedBudgets = getStorage<IBudgetForm[] | IBudgets>(
  BUDGETS,
  [],
);

const initialState: IBudgets = {
  budgets: Array.isArray(storedBudgets)
    ? storedBudgets
    : storedBudgets.budgets,
};

export const budgetsSlice = createSlice({
  name: "budgets",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<IBudgetForm>) => {
      state.budgets.push(action.payload);
      setStorage(BUDGETS, state.budgets);
    },
  },
});

export default budgetsSlice.reducer;
export const { addBudget } = budgetsSlice.actions;
