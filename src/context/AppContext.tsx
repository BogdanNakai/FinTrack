export const categoriesValue = [
  { value: "savings-account", label: "Savings Account" },
  { value: "health-fitness", label: "Health & Fitness" },
  { value: "bills-utilities", label: "Bills & Utilities" },
  { value: "feelance", label: "Freelance" },
  { value: "investment", label: "Investment" },
  { value: "shopping", label: "Shopping" },
  { value: "transportationt", label: "Transportation" },
  { value: "salary", label: "Salary" },
  { value: "food-dining", label: "Food & Dining" },
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
  const months = [];
  for (let i = 5; i >= 0; i--) { // цикл у зворотному порядку, щоб місяці йшли зліва направо хронологічно
    const d = new Date(startDate.getFullYear(), startDate.getMonth() - i, 1);
    
    // 'short' замість 'long' поверне скорочення з 3 літер (Jan, Feb, Mar...)
    const monthName = d.toLocaleString('en-US', { month: 'short' }); 
    months.push(monthName);
  }
  return months; // Поверне, наприклад: ['Mar', 'Apr', 'May', 'Jun', 'Jul']
}

