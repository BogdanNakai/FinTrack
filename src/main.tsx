import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Provider } from "react-redux";
import App from "./App.tsx";
import { ContextProvider } from "./context/ModalContexnt/ModalContex.tsx";
import TransactionProvider from "./context/TransactionsContext/TransactiononsProvidex.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
       <TransactionProvider>
          <ContextProvider>
            <App />
          </ContextProvider>
       </TransactionProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
