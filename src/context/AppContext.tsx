import type { ISelectOption } from "@/components/form/Form.type";
import type { TCategory } from "@/types/category.type";

export const categoriesValue = [
  {
    value: "Savings Account",
    label: "Savings Account",
  },
  {
    value: "Health & Fitness",
    label: "Health & Fitness",
  },
  {
    value: "Bills & Utilities",
    label: "Bills & Utilities",
  },
  {
    value: "Freelance",
    label: "Freelance",
  },
  {
    value: "Investment",
    label: "Investment",
  },
  {
    value: "Shopping",
    label: "Shopping",
  },
  {
    value: "Transport",
    label: "Transport",
  },
  {
    value: "Salary",
    label: "Salary",
  },
  {
    value: "Food & Dining",
    label: "Food & Dining",
  },
  {
    value: "Entertainment",
    label: "Entertainment",
  },
  {
    value: "Education",
    label: "Education",
  },
  {
    value: "Others",
    label: "Others",
  },
] satisfies ReadonlyArray<ISelectOption>;

export const statusGoal = [
  { value: "Ongoing", label: "Ongoing" },
  { value: "Completed", label: "Completed" },
] satisfies ReadonlyArray<ISelectOption>;

export const typeValue = [
  { value: "Income", label: "Income" },
  { value: "Expense", label: "Expense" },
] satisfies ReadonlyArray<ISelectOption>;

export const filterTimePeriod = [
  { value: "Weekly", label: "Weekly" },
  { value: "Monthly", label: "Monthly" },
  { value: "Quarterly", label: "Quarterly" },
  { value: "Yearly", label: "Yearly" },
] satisfies ReadonlyArray<ISelectOption>;

export const filterNewestFirst = [
  { value: "Newest First", label: "Newest First" },
  { value: "Oldest First", label: "Oldest First" },
  { value: "Highest Amount", label: "Highest Amount" },
  { value: "Lowest Amount", label: "Lowest Amount" },
] satisfies ReadonlyArray<ISelectOption>;

export const filterDateRange = [
  { value: "Today", label: "Today" },
  { value: "This Week", label: "This Week" },
  { value: "This Month", label: "This Month" },
  { value: "Last Month", label: "Last Month" },
  { value: "Last 3 Months", label: "Last 3 Months" },
] satisfies ReadonlyArray<ISelectOption>;

export const categoriesData = [
  { label: "Food", value: 26.1, color: "#22c55e", darkColor: "#15803d" },
  { label: "Travel", value: 22.8, color: "#2563eb", darkColor: "#1d4ed8" },
  {
    label: "Entertainment",
    value: 16.3,
    color: "#f59e0b",
    darkColor: "#b45309",
  },
  { label: "Shopping", value: 13.1, color: "#ef4444", darkColor: "#b91c1c" },
  { label: "Others", value: 21.7, color: "#64748b", darkColor: "#334155" },
];

export const totalCostsByCategory = [
  { value: 35000, label: "Food & Dining", color: "#FBBF24" },
  { value: 20000, label: "Transport", color: "#3B82F6" },
  { value: 15000, label: "Entertainment", color: "#EF4444" },
  { value: 25000, label: "Shopping", color: "#22C55E" },
  { value: 30000, label: "Bills & Utilities", color: "#8B5CF6" },
];

export const goalProgress = [
  { label: "Ongoing", value: 17, color: "#00B894", darkColor: "#00B08D" },
  { label: "Completed", value: 83, color: "#22C55E", darkColor: "#1AD860" },
];

export const listGoal = [
  {
    label: "Buy a New Laptop",
    target: 200,
    saved: 100,
    status: "Ongoing",
  },
  {
    label: "Emergency Fund",
    target: 2000,
    saved: 500,
    status: "Ongoing",
  },
  {
    label: "Vacation Trip",
    target: 523,
    saved: 523,
    status: "Completed",
  },
];

export const dataExpense = [null, 2, 500, 233, 34, 200, 230];
export const dataIncome = [null, 3, 34, 1111, 5, 142, 100];
export const dataBudget = [null, 100, 100, 100, 100, 100, 100];
export const dataSpending = [null, 3, 34, 20, 5, 142, 100];

export const balanceSeries = [
  { data: dataExpense, label: "Expense", color: "#EF4444" },
  { data: dataIncome, label: "Income", color: "#00B894" },
];

export const seriesBudgetSpending = [
  { data: dataBudget, label: "Budget", color: "#3366CC" },
  { data: dataSpending, label: "Spending ", color: "#DC3912" },
];

export const listTransactionBudget = [
  {
    category: "Food & Dining" as TCategory,
    limit: 100,
    spent: 50,
  },
  {
    category: "Savings Account" as TCategory,
    limit: 10000,
    spent: 8300,
  },
  {
    category: "Shopping" as TCategory,
    limit: 10000,
    spent: 80300,
  },
];

export const heroBalance = [
  {
    totalBalance: 10000,
    totalIncome: 400,
    totalExpense: 510,
  },
];

export const moneyFormatter = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  currencySign: "accounting",
  maximumFractionDigits: 0,
});

export const getCategoryLabel = (category: TCategory) =>
  categoriesValue.find((item) => item.value === category)?.label ?? category;

export const getLastSixMonthLabels = (startDate = new Date()) => {
  const months = [""];
  for (let i = 5; i >= 0; i--) {
    // цикл у зворотному порядку, щоб місяці йшли зліва направо хронологічно
    const d = new Date(startDate.getFullYear(), startDate.getMonth() - i, 1);

    // 'short' замість 'long' поверне скорочення з 3 літер (Jan, Feb, Mar...)
    const monthName = d.toLocaleString("en-US", { month: "short" });
    months.push(monthName);
  }
  return months; // Поверне, наприклад: ['Mar', 'Apr', 'May', 'Jun', 'Jul']
};
