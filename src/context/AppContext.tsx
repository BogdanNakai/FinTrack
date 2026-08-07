export const categoriesValue = [
  { value: "savings-account", label: "Savings Account" },
  { value: "health-fitness", label: "Health & Fitness" },
  { value: "bills-utilities", label: "Bills & Utilities" },
  { value: "feelance", label: "Freelance" },
  { value: "investment", label: "Investment" },
  { value: "shopping", label: "Shopping" },
  { value: "transport", label: "Transport" },
  { value: "salary", label: "Salary" },
  { value: "food-dining", label: "Food & Dining" },
];

export const statusGoal = [
  { value: "ongoing", label: "Ongoing" },
  { value: "completed", label: "Completed" },
];

export const typeValue = [
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];
export const filterOptionsTime = [
  { value: "day", label: "This day" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month" },
];

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

export const lastFiveMonthe = (startDate = new Date()) => {
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

export const totalСostsСategory = [
  { value: 35000, label: "Food & Dining", color: "#FBBF24" },
  { value: 20000, label: "Transport", color: "#3B82F6" },
  { value: 15000, label: "Entertainment", color: "#EF4444" },
  { value: 25000, label: "Shopping", color: "#22C55E" },
  { value: 30000, label: "Bills & Utilities", color: "#8B5CF6" },
];

export const GoalProgress = [
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

export const seriesBalanse = [
  { data: dataExpense, label: "Expense", color: "#EF4444" },
  { data: dataIncome, label: "Income", color: "#00B894" },
];

export const seriesBudgetSpending = [
  { data: dataBudget, label: "Budget", color: "#3366CC" },
  { data: dataSpending, label: "Spending ", color: "#DC3912" },
];
