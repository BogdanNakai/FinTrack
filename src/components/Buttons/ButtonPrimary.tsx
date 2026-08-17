import { Link } from "react-router-dom";
import type { IButtonProps } from "./Buttons.type";

const ButtonPrimary = ({ textButton, type }: IButtonProps) => {
  return (
    <button
      type={type}
      className="flex justify-center rounded-[8px] tracking-[0.02em] px-[20px] box-border min-h-[40px] min-w-[120px] items-center bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border-[1px] border-[#e2e8f0]"
    >
      {textButton}
    </button>
  );
};

export default ButtonPrimary;