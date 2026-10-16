import deleteIcon from "@/assets/icon_remove.svg";
import editIcon from "@/assets/icon_change.svg";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContexnt/useModalContext";

const ButtonActions = ({
  idRecord,
  typeButton,
}: {
  idRecord: string;
    typeButton: string;
}) => {
  const {
    setOpenModal,
    setOpenModalMessageDelete,
    setIdTransaction,
    blockScroll,
    setOpenModalChanges,
    setDeleteTarget,
  } = useContext(ModalContext);

  return (
    <span className="flex justify-center gap-1.5">
      <button
        type="button"
        className="bg-[#F5C644] w-9 h-9 rounded-full flex justify-center items-center"
        onClick={() => {
          setOpenModalChanges(true);
          setOpenModal(true);
          setIdTransaction(idRecord);
          blockScroll();
        }}
      >
        <img src={editIcon} alt="Image" />
      </button>
      <button
        type="button"
        className="bg-[#EF4444] w-9 min-h-9 rounded-full flex justify-center items-center"
        onClick={() => {
          setDeleteTarget(typeButton);
          setIdTransaction(idRecord);
          setOpenModalMessageDelete(true);
          blockScroll();
        }}
      >
        <img src={deleteIcon} alt="Image" />
      </button>
    </span>
  );
};

export default ButtonActions;
