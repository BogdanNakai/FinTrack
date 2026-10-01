import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getStorage, setStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { IGoalForm, IGoals } from "@/types/goals.types";

const { GOALS } = STORAGE_KEYS;

const storedGoals = getStorage<IGoalForm[] | IGoals>(GOALS, []);

const initialState: IGoals = {
  goals: Array.isArray(storedGoals) ? storedGoals : storedGoals.goals,
};

export const goalsSlice = createSlice({
  name: "goals",
  initialState,
  reducers: {
    addGoal: (state, action: PayloadAction<IGoalForm>) => {
      state.goals.push(action.payload);
      setStorage(GOALS, state.goals);
    },
  },
});

export default goalsSlice.reducer;
export const { addGoal } = goalsSlice.actions;
