import deleteIcon from "@/assets/delete_icon.svg";
import editIcon from "@/assets/edit_icon.svg";

const ButtonActions = () => {
  return (
    <span className="flex gap-1.5">
      <button
        type="button"
        className="bg-[#F5C644] w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={editIcon} alt="Image" />
      </button>
      <button
        type="button"
        className="bg-[#EF4444] w-9 h-9 rounded-full flex justify-center items-center"
      >
        <img src={deleteIcon} alt="Image" />
      </button>
    </span>
  );
};

export default ButtonActions;
