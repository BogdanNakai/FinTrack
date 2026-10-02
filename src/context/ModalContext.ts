import { createContext } from "react";
import type { IModalProps } from "./Modal.type";

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
  idTransaction: '',
  setIdTransaction: () => undefined,
});
