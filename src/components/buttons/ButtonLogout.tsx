import type { IButtonProps } from "./Buttons.type";
import { useNavigate } from "react-router-dom";
import { removeStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";

const ButtonLogout = ({ textButton }: IButtonProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeStorage(STORAGE_KEYS.ACTIVE_USER_ID);
    navigate("/login", { replace: true });
  };

  return (
    <>
      <div>
        <button
          type="button"
          onClick={handleLogout}
          className="block bg-[#e2e8f0] tracking-[0.02em] px-5 box-border min-h-10 min-w-30 text-[16px] text-[#1E293B] rounded-lg hover:bg-[#cbd5e1] active:scale-[0.95] transition-[0.15s] border border-[#e2e8f0]"
        >
          {textButton}
        </button>
      </div>
    </>
  );
};

export default ButtonLogout;
