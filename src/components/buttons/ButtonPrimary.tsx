import type { IButtonProps } from "./Buttons.type";

const ButtonPrimary = ({ textButton, type }: IButtonProps) => {
  const newLocal = "flex justify-center rounded-lg tracking-[0.02em] px-5 box-border min-h-[40px] min-w-[120px] items-center bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border-[1px] border-[#e2e8f0]";
  return (
    <button
      type={type}
      className={newLocal}
    >
      {textButton}
    </button>
  );
};

export default ButtonPrimary;