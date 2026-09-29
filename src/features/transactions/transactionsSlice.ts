import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getStorage, setStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { ITransactions } from "@/types/transaction.types";

const { TRANSACTIONS } = STORAGE_KEYS;

const initialState: ITransactions = {
  transactions: getStorage(TRANSACTIONS, []),
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.transactions.push(action.payload);
      setStorage(TRANSACTIONS, state);
    },
  },
});

export default transactionsSlice.reducer;
export const { addTransaction } = transactionsSlice.actions;