import { createSlice } from "@reduxjs/toolkit";

import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type { ITransactions } from "@/types/transaction.types";

const { TRANSACTIONS } = STORAGE_KEYS;

const initialState: ITransactions = {
  transactions: getStorage(TRANSACTIONS, []),
};

export const counterSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
  
  },
});

export default counterSlice.reducer;
