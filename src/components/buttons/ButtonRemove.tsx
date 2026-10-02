import { ModalContext } from "@/context/ModalContext";
import type { IButtonProps } from "./Buttons.type";
import { useContext } from "react";
import { useActions } from "@/hooks/useActions";

const ButtonRemove = ({ textButton }: IButtonProps) => {
  const { deleteTransaction } = useActions();
  const { idTransaction, setOpenModalMessageDelete, blockScroll } =
    useContext(ModalContext);

  return (
    <>
      <div>
        <button
          type="button"
          className="block tracking-[0.02em] px-[20px] box-border min-h-[40px] min-w-[120px] bg-[#EF4444] text-[16px] text-[#FFFFFF] rounded-[8px] hover:bg-[#f87171] active:scale-[0.95] transition duration-150"
          onClick={() => {
            deleteTransaction(idTransaction);
            setOpenModalMessageDelete(false);
            blockScroll();
          }}
        >
          {textButton}
        </button>
      </div>
    </>
  );
};

export default ButtonRemove;
