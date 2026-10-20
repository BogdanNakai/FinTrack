import BudgetProvider from "../BudgetContext/BudgetProvider";
import type { ContextProviderProps } from "../Context.type";
import GoalProvider from "../GoalContext/GoalProvider";
import { ContextProvider } from "../ModalContexnt/ModalContex";
import TransactionProvider from "../TransactionsContext/TransactiononsProvidex";

const AppProvider = ({ children }: ContextProviderProps) => {
  return (
    <GoalProvider>
      <BudgetProvider>
      	<TransactionProvider>
  	      <ContextProvider>{children}</ContextProvider>
  	    </TransactionProvider>
      </BudgetProvider>
    </GoalProvider>
  );
};

export default AppProvider;
