import type { IButtonProps } from "./Buttons.type";
import plus from "@/assets/icon_plus.svg";

const ButtonPrimaryActions = ({ textButton, link }: IButtonProps) => {
  return (
    <a
      href={link}
      type="button"
      className="flex justify-center items-center gap-[15px] rounded-[8px] tracking-[0.02em] px-[20px] box-border min-h-[40px] min-w-[120px] items-center bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border-[1px] border-[#e2e8f0]"
    >
      <img src={plus} alt="Image" />
      {textButton}
    </a>
  );
};

export default ButtonPrimaryActions;
