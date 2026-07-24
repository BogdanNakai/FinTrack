import type { IButtonProps } from "./Buttons.type";

const ButtonRemove = ({ textButton }: IButtonProps) => {
  return (
    <>
      <div>
        <button
          type="button"
          className="block tracking-[0.02em] px-[20px] box-border h-[40px] min-w-[120px] bg-[#EF4444] text-[16px] text-[#FFFFFF] rounded-[8px] hover:bg-[#f87171] active:scale-[0.95] transition-[0.15s]"
        >
          {textButton}
        </button>
      </div>
    </>
  );
};

export default ButtonRemove;
