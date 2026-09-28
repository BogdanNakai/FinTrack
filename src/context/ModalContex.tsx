import { createContext, useState } from "react";
import type { ContextProviderProps, IModalProps } from "./Modal.type";

export const ModalContext = createContext({} as IModalProps);

 export const ContextProvider = ({ children }: ContextProviderProps) => {
	 const [openModal, setOpenModal] = useState(false);
	 const value: IModalProps = {
		 openModal,
		 setOpenModal,
	 };

   return (
     <ModalContext.Provider value={value}>
       {children}
     </ModalContext.Provider>
   );
 };
