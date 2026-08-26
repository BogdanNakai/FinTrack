import { Link } from "react-router-dom";
import type { IButtonProps } from "./Buttons.type";

const ButtonLinkPrimary = ({ type ,textButton, link }: IButtonProps) => {
  return (
    <Link
      to={`${link}`}
      type={type}
      className="flex justify-center rounded-lg tracking-[0.02em] px-5 box-border min-h-10 min-w-30 items-center bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border border-[#e2e8f0]"
    >
      {textButton}
    </Link>
  );
};

export default ButtonLinkPrimary;