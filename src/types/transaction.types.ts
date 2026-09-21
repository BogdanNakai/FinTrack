export type TransactionCategory =
  | "savings-account"
  | "health-fitness"
  | "bills-utilities"
  | "freelance"
  | "investment"
  | "shopping"
  | "transport"
  | "salary"
  | "food-dining"
  | "entertainment"
  | "education"
  | "others";

export type TransactionType = "income" | "expense";

export interface ITransaction {
  date: string;
  category: TransactionCategory;
  description: string;
  amount: number;
  type: TransactionType;
  id: string;
  userId: string;
}

export interface ITransactions {
  transactions: ITransaction[];
}
