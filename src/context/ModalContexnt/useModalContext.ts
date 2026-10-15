import { createContext } from "react";
import type { IModalProps } from "../Context.type";

export const ModalContext = createContext<IModalProps>({
  openModalTransactions: false,
  setOpenModalTransactions: () => undefined,
  blockScroll: () => undefined,
  openModalMessageSuccess: false,
  setOpenModalMessageSuccess: () => undefined,
  openModalMessageFailed: false,
  setOpenModalMessageFailed: () => undefined,
  openModalMessageDelete: false,
  setOpenModalMessageDelete: () => undefined,
  idPar: "",
  setIdTransaction: () => undefined,
  openModalTransactionChanges: false,
  setOpenModalTransactionChanges: () => undefined,
  curentPageTransactions: 1,
  setCurentPageTransactions: () => undefined,
});
