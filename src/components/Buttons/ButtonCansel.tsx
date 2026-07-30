import type { IButtonProps } from "./Buttons.type";

const ButtonCansel = ({ textButton}: IButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className="block bg-[#ffffff] tracking-[0.02em] px-[20px] box-border min-h-[40px] min-w-[120px] text-[16px] text-[#1E293B] rounded-[8px] hover:bg-[#f8fafc] active:scale-[0.95] transition-[0.15s] border-[1px] border-[#e2e8f0]"
      >
        {textButton}
      </button>
    </div>
  );
};

export default ButtonCansel;
