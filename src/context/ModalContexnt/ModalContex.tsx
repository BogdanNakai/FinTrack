import { useState } from "react";
import { ModalContext } from "./useModalContext";
import type { ContextProviderProps, IModalProps } from "../Context.type";

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalMessageSuccess, setOpenModalMessageSuccess] = useState(false);
  const [openModalMessageFailed, setOpenModalMessageFailed] = useState(false);
  const [openModalMessageDelete, setOpenModalMessageDelete] = useState(false);
  const [openModalChanges, setOpenModalChanges] = useState(false);
  const [idRecord, setIdTransaction] = useState("");
  const [curentRecardsList, setCurentRecardsList] = useState(1);

  const isBlocke =
    openModal || openModalMessageFailed || openModalMessageDelete;

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
    openModal,
    setOpenModal,
    openModalMessageSuccess,
    setOpenModalMessageSuccess,
    openModalMessageFailed,
    setOpenModalMessageFailed,
    blockScroll,
    openModalMessageDelete,
    setOpenModalMessageDelete,
    idRecord,
    setIdTransaction,
    openModalChanges,
    setOpenModalChanges,
    curentRecardsList,
    setCurentRecardsList,
  };

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
