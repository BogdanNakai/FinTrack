export interface IModalProps {
  openModalTransactions: boolean;
  setOpenModalTransactions: (isOpen: boolean) => void;
  blockScroll: () => void;
  openModalMessageSuccess: boolean;
  setOpenModalMessageSuccess: (isOpen: boolean) => void;
  openModalMessageFailed: boolean;
  setOpenModalMessageFailed: (isOpen: boolean) => void;
  openModalMessageDelete: boolean;
  setOpenModalMessageDelete: (isOpen: boolean) => void;
  idTransaction: string;
  setIdTransaction: (id: string) => void;
  openModalTransactionChanges: boolean;
  setOpenModalTransactionChanges: (isOpen: boolean) => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};
