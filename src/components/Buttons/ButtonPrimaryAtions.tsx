import type { IButtonProps } from "./Buttons.type";
import plus from "@/assets/icon_plus.svg";

const ButtonPrimaryActions = ({ textButton, link }: IButtonProps) => {
  return (
    <a
      href={link}
      type="button"
      className="flex justify-center items-center gap-3.75 rounded-lg tracking-[0.02em] px-5 box-border min-h-10 min-w-30 bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border border-[#e2e8f0]"
    >
      <img src={plus} alt="Image" />
      {textButton}
    </a>
  );
};

export default ButtonPrimaryActions;
