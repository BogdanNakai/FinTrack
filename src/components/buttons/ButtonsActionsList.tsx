import type { IButtonPaginations } from "./Buttons.type";
import { useContext } from "react";
import { ModalContext } from "@/context/ModalContext";

const ButtonsActionsList = ({ listObject }: IButtonPaginations) => {
  const quantityCount = Math.ceil(listObject.length / 9);
  const quantityCountArray = Array.from(
    { length: quantityCount },
    (_, index) => index + 1,
  );
  const { curentPageTransactions, setCurentPageTransactions } =
    useContext(ModalContext);

  return (
    <>
      {quantityCount >= 1 ? (
        <div className="flex flex-wrap items-center justify-center gap-[12px] py-[6px]">
          <button
            onClick={() => {
              if (curentPageTransactions >= 2) {
                return setCurentPageTransactions(curentPageTransactions - 1);
              }
            }}
            className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[51px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition duration-150 focus:text-[#fff] focus:bg-[#00DCA0]"
          >
            Prev
          </button>
          {quantityCountArray.map((i) => (
            <button
              key={i}
              onClick={() => setCurentPageTransactions(i)}
              className="bg-[#ffffff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] focus:bg-[#00B894] transition duration-150 focus:text-[#fff] focus:bg-[#00DCA0]"
            >
              {i}
            </button>
          ))}
          <button
            onClick={() => {
              if (curentPageTransactions < quantityCountArray.length)
                return setCurentPageTransactions(curentPageTransactions + 1);
            }}
            className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[51px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition duration-150 focus:text-[#fff] focus:bg-[#00DCA0]"
          >
            Next
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ButtonsActionsList;
