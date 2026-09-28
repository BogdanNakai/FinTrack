export interface IModalProps {
  openModal: boolean;
  setOpenModal: (isOpen: boolean) => void;
}

export type ContextProviderProps = {
  children: React.ReactNode;
};