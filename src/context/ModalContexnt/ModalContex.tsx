import { useState } from "react";
import { ModalContext } from "./useModalContext";
import type { ContextProviderProps, IModalProps } from "../Context.type";

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [openModalTransactions, setOpenModalTransactions] = useState(false);
  const [openModalMessageSuccess, setOpenModalMessageSuccess] = useState(false);
  const [openModalMessageFailed, setOpenModalMessageFailed] = useState(false);
  const [openModalMessageDelete, setOpenModalMessageDelete] = useState(false);
  const [openModalTransactionChanges, setOpenModalTransactionChanges] =
    useState(false);
  const [idPar, setIdTransaction] = useState("");
  const [curentPageTransactions, setCurentPageTransactions] = useState(1);

  const isBlocke =
    openModalTransactions || openModalMessageFailed || openModalMessageDelete;

  const blockScroll = () => {
    if (!isBlocke) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  setTimeout(() => {
    if (openModalMessageSuccess) {
      setOpenModalMessageSuccess(false);
    }
  }, 3000);

  const value: IModalProps = {
    openModalTransactions,
    setOpenModalTransactions,
    openModalMessageSuccess,
    setOpenModalMessageSuccess,
    openModalMessageFailed,
    setOpenModalMessageFailed,
    blockScroll,
    openModalMessageDelete,
    setOpenModalMessageDelete,
    idPar,
    setIdTransaction,
    openModalTransactionChanges,
    setOpenModalTransactionChanges,
    curentPageTransactions,
    setCurentPageTransactions,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
