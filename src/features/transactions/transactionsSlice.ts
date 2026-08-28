import { createSlice } from "@reduxjs/toolkit";
import type { ITransactions } from "./transaction.type";
import { getStorage } from "@/services/localStorage";

const initialState: ITransactions = {
  transactions: getStorage("transactions"),
};

export const counterSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    increment: (state) => {
      state.transactions;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
