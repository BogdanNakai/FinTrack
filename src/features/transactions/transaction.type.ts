export interface ICategories {
  category:
    | "Savings Account"
    | "Health & Fitness"
    | "Bills & Utilities"
    | "Freelance"
    | "Investment"
    | "Shopping"
    | "Transport"
    | "Salary"
    | "Food & Dining"
    | "Entertainment"
    | "Education"
    | "Others";
}

interface ITypeTransaction {
  type: "Expense" | "Income";
}

export interface ITransaction {
  date: Date;
  category: ICategories;
  description: string;
  value: number;
  type: ITypeTransaction;
  id: string;
  userId: string;
}

export interface ITransactions {
  transactions: ITransaction[];
}
