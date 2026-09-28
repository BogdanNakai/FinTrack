export interface IModalProps {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
  blockScroll: () => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};