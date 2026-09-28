import { createContext, useState } from "react";
import type { ContextProviderProps, IModalProps } from "./Modal.type";

export const ModalContext = createContext({} as IModalProps);

export const ContextProvider = ({ children }: ContextProviderProps) => {
	const [openModal, setOpenModal] = useState(false);
	
	const blockScroll = () => {
		if (!openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
	};

  const value: IModalProps = {
    openModal,
    setOpenModal,
    blockScroll,
  };
	
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
