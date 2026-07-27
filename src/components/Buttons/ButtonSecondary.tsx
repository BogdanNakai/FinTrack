import type { IButtonProps } from "./Buttons.type";

const ButtonSecondary = ({textButton}: IButtonProps) => {
  return (
    <button
      type="button"
      className="flex justify-center rounded-[8px] tracking-[0.02em] px-[20px] box-border h-[40px] min-w-[120px] items-center text-[#00B894] hover:bg-[#00B894] hover:text-[#fff] active:text-[#fff] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s] border-[1px] border-[#00B894] active:border-[#BEEBD8]"
    >
      {textButton}
    </button>
  );
};

export default ButtonSecondary