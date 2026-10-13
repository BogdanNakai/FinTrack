import { useAppSelector } from "@/app/hooks";
import { TransactionContext } from "./useTransactionsContext";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { getStorage } from "@/services/localStorage";
import { useState } from "react";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import isoWeek from "dayjs/plugin/isoWeek";
import type { ContextProviderProps, ITransactionContext } from "../Context.type";
dayjs.extend(isBetween);
dayjs.extend(isoWeek);

const TransactionProvider = ({ children }: ContextProviderProps) => {
  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const [dateRange, setDateRange] = useState("This Month");
  const [transactionType, setTransactionType] = useState("All Type");
  const [sortPrice, setSortPrice] = useState("");
  const transactions = useAppSelector(
    (state) => state.transactions.transactions,
  ).filter((transaction) => transaction.idUser === idUser);

  const today = new Date().toISOString().slice(0, 10);
  const isTodayInCurrentWeek = (date: string) => {
    const target = dayjs(date);

    const startOfWeek = dayjs().startOf("isoWeek");
    const endOfWeek = dayjs().endOf("isoWeek");

    return target.isBetween(startOfWeek, endOfWeek, "day", "[]");
  };
  const isTodayInCurrentMonth = (date: string) => {
    return dayjs(date).isSame(dayjs(), "month");
  };
  const isInPreviousMonthShort = (date: string) => {
    return dayjs(date).isSame(dayjs().subtract(1, "month"), "month");
  };
  const isInLast3Months = (date: string) => {
    const target = dayjs(date);

    const start = dayjs().subtract(2, "months").startOf("month");
    const end = dayjs().endOf("month");

    // 'day' — порівняння по днях, '[]' — включаючи крайні дати
    return target.isBetween(start, end, "day", "[]");
  };
  
  const filterdTransactions = transactions.filter((e) => {
    const matchesType =
      transactionType !== "All Type" ? e.type === transactionType : e;

    const matchesDate =
      dateRange === "Today"
        ? e.date === today
        : dateRange === "This Week"
          ? isTodayInCurrentWeek(e.date)
          : dateRange === "This Month"
            ? isTodayInCurrentMonth(e.date)
            : dateRange === "Last Month"
              ? isInPreviousMonthShort(e.date)
              : dateRange === "Last 3 Month"
                ? isInLast3Months(e.date)
                : e;

    return matchesType && matchesDate;
  });

  const sortTransaction = filterdTransactions.sort((a, b) => {
    const matchesAmount =
      sortPrice === "Lowest Amount"
        ? a.amount - b.amount
        : sortPrice === "Highest Amount"
          ? b.amount - a.amount
          : sortPrice === "Newest First"
            ? dayjs(a.date).valueOf() - dayjs(b.date).valueOf()
            : sortPrice === "Oldest First"
              ? dayjs(b.date).valueOf() - dayjs(a.date).valueOf()
              : 1;

    return matchesAmount;
  });

  const resultTransactions = filterdTransactions && sortTransaction;

  const value: ITransactionContext = {
    transactions,
    dateRange,
    transactionType,
    sortPrice,
    setDateRange,
    setTransactionType,
    setSortPrice,
    resultTransactions,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
