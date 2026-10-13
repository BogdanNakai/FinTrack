import BudgetProvider from "../BudgetContext/BudgetProvider";
import type { ContextProviderProps } from "../Context.type";
import { ContextProvider } from "../ModalContexnt/ModalContex";
import TransactionProvider from "../TransactionsContext/TransactiononsProvidex";

const AppProvider = ({ children }: ContextProviderProps) => {
  return (
    <BudgetProvider>
    	<TransactionProvider>
	      <ContextProvider>{children}</ContextProvider>
	    </TransactionProvider>
    </BudgetProvider>
  );
};

export default AppProvider;
