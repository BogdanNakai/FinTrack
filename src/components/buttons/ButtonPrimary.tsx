import type { IButtonProps } from "./Buttons.type";

const ButtonPrimary = ({ textButton, type, isValid }: IButtonProps) => {
  const newLocal =
    "flex justify-center rounded-lg tracking-[0.02em] px-5 box-border min-h-[40px] min-w-[120px] items-center bg-[#00B894] text-white hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition duration-150 border border-[#e2e8f0]";
  return (
    <button type={type} className={newLocal}>
      {isValid ? "Save" : textButton}
    </button>
  );
};

export default ButtonPrimary;
