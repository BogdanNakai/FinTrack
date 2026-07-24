import ButtonCansel from "../Buttons/ButtonCansel";
import ButtonRemove from "../Buttons/ButtonRemove";


const ModalDeleteTransactions = () => { 
	return (
    <>
      <div className="rounded-[12px] p-[25px] flex flex-col items-center gap-[14px] bg-[#fff] max-w-[480px]">
        <p className="text-[18px] text-[#1E293B]">Delete Transaction?</p>
        <p className="max-w-[338px] text-center text-[#64748B] text-[14px]  tracking-[0.02em]">
          Are you sure you want to delete this transaction? This action cannot
          be undone.
        </p>
        <div className="flex items-center gap-[10px]">
          <ButtonCansel />
          <ButtonRemove textButton="Cansel"/>
        </div>
      </div>
    </>
  );
};

export default ModalDeleteTransactions