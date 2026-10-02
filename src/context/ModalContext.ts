import { createContext } from "react";
import type { IModalProps } from "./Modal.type";

export const ModalContext = createContext<IModalProps>({
  openModal: false,
  setOpenModal: () => undefined,
  blockScroll: () => undefined,
  openModalMessage: false,
  setOpenModalMessage: () => undefined,
});
