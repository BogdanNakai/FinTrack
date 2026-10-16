import { createContext } from "react";
import type { IModalProps } from "../Context.type";

export const ModalContext = createContext<IModalProps>({
  openModal: false,
  setOpenModal: () => undefined,
  blockScroll: () => undefined,
  openModalMessageSuccess: false,
  setOpenModalMessageSuccess: () => undefined,
  openModalMessageFailed: false,
  setOpenModalMessageFailed: () => undefined,
  openModalMessageDelete: false,
  setOpenModalMessageDelete: () => undefined,
  idRecord: "",
  setIdTransaction: () => undefined,
  openModalChanges: false,
  setOpenModalChanges: () => undefined,
  curentRecardsList: 1,
  setCurentRecardsList: () => undefined,
  deleteTarget: '',
  setDeleteTarget: () => undefined,
});
