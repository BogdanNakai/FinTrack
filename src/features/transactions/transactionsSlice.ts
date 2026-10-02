import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import { getStorage, setStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { ITransactionForm, ITransactions } from "@/types/transaction.types";

const { TRANSACTIONS } = STORAGE_KEYS;

const storedTransactions = getStorage<ITransactionForm[] | ITransactions>(
  TRANSACTIONS,
  [],
);

const initialState: ITransactions = {
  transactions: Array.isArray(storedTransactions)
    ? storedTransactions
    : storedTransactions.transactions,
};

export const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<ITransactionForm>) => {
      state.transactions.push(action.payload);
      setStorage(TRANSACTIONS, state.transactions);
    },
    deleteTransaction: (state, action: PayloadAction<string>) => {
      state.transactions = state.transactions.filter(
        (transaction) => transaction.idTransaction !== action.payload,
      );
      setStorage(TRANSACTIONS, state.transactions);
    },
  },
});

export default transactionsSlice.reducer;
export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
