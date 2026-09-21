import type { IButtonProps } from "./Buttons.type";

const ButtonChanges = ({ textButton }: IButtonProps) => {
  return (
    <div>
      <button
        type="button"
        className="block bg-[#E2E8F0] tracking-[0.02em] px-5 box-border min-h-10  min-w-30 text-[16px] text-[#1E293B] rounded-lg hover:bg-[#f8fafc] active:scale-[0.95] transition-[0.15s] border border-[#e2e8f0]"
      >
        {textButton}
      </button>
    </div>
  );
};

export default ButtonChanges;
