import { ModalContext } from "@/context/ModalContext";
import type { IButtonProps } from "./Buttons.type";
import { useContext } from "react";

const ButtonCancel = ({ textButton }: IButtonProps) => {
  const { setOpenModalMessageDelete, blockScroll } = useContext(ModalContext);
  return (
    <div>
      <button
        onClick={() => {
          setOpenModalMessageDelete(false);
          blockScroll();
        }}
        type="button"
        className="block bg-[#ffffff] tracking-[0.02em] px-5 box-border min-h-10 min-w-30 text-[16px] text-[#1E293B] rounded-lg hover:bg-[#f8fafc] active:scale-[0.95] transition duration-150 border border-[#e2e8f0]"
      >
        {textButton}
      </button>
    </div>
  );
};

export default ButtonCancel;
