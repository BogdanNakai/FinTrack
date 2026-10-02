import { useActions } from "@/hooks/useActions";
import ButtonCancel from "../buttons/ButtonCancel";
import ButtonRemove from "../buttons/ButtonRemove";

const ModalDeleteTransactions = () => {
    return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-[#0000003e] flex justify-center items-center">
      <div className="rounded-[12px] p-[25px] flex flex-col items-center gap-[14px] bg-[#fff] max-w-[480px]">
        <p className="text-[18px] text-[#1E293B]">Delete Transaction?</p>
        <p className="max-w-[338px] text-center text-[#64748B] text-[14px]  tracking-[0.02em]">
          Are you sure you want to delete this transaction? This action cannot
          be undone.
        </p>
        <div className="flex items-center gap-[10px]">
          <ButtonCancel textButton="Cancel"  />
          <ButtonRemove textButton="Delete"/>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteTransactions;
