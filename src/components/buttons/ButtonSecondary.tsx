import { ModalContext } from "@/context/ModalContext";
import type { IButtonProps } from "./Buttons.type";
import { useContext } from "react";

const ButtonSecondary = ({ textButton, type = "button" }: IButtonProps) => {
  const { setOpenModalTransactions, blockScroll, setOpenModalTransactionChanges } = useContext(ModalContext);
  return (
    <button
      type={type}
      onClick={() => {
        setOpenModalTransactions(false);
        setOpenModalTransactionChanges(false);
        blockScroll();
      }}
      className="flex justify-center rounded-[8px] tracking-[0.02em] px-[20px] box-border min-h-[40px] min-w-[120px] items-center text-[#00B894] hover:bg-[#00B894] hover:text-[#fff] active:text-[#fff] active:scale-[0.95] active:bg-[#BEEBD8] transition duration-150 border border-[#00B894] active:border-[#BEEBD8]"
    >
      {textButton}
    </button>
  );
};

export default ButtonSecondary;
