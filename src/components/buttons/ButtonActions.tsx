import deleteIcon from "@/assets/icon_remove.svg";
import editIcon from "@/assets/icon_change.svg";
import { useActions } from "@/hooks/useActions";

const ButtonActions = ({ idTransaction }: { idTransaction: string }) => {

  const { deleteTransaction } = useActions();

  return (
    <span className="flex justify-center gap-1.5">
      <button
        type="button"
        className="bg-[#F5C644] w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={editIcon} alt="Image" />
      </button>
      <button
        type="button"
        className="bg-[#EF4444] w-9 min-h-9 rounded-full flex justify-center items-center"
        onClick={() => deleteTransaction(idTransaction)}
      >
        <img src={deleteIcon} alt="Image" />
      </button>
    </span>
  );
};

export default ButtonActions;
