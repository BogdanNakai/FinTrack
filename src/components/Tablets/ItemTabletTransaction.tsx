import { listTransaction } from "@/context/AppContext";
import ElementTitleCategory from "./ElementTitleCategory";
import ProgressLine from "../uii/ProgressLine/ProgressLine";
import ButtonActions from "../Buttons/ButtonActions";

const ItemTabletTransaction = () => {
  const monyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  return (
    <>
      {listTransaction.map((e: any) => {
        return (
          <div className="bg-[#fff] text-[#1E293B] flex justify-center items-center gap-[16px] min-h-[56px]  px-[10px] border-y border-[#143a6c16]">
            <div className="text-[14px] font-regular flex-[0_1_10%]">
              {e.dateValue.toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_18.3%]">
              <ElementTitleCategory category={e.categories} />
            </div>
            <div className="text-[14px] font-regular flex-[0_1_24.5%]">
              {e.description}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_11.6%]">
              {monyFormatter.format(e.amount)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_8.3%] text-center">
              {e.type == "Expense" ? (
                <span className="flex items-center justify-center w-25 h-7 rounded-4xl bg-[#fdecec] text-[#c72525]">
                  Expense
                </span>
              ) : (
                <span className="flex items-center justify-center w-25 h-7 rounded-4xl bg-[#e6f9ec] text-[#0b8a36]">
                  Income
                </span>
              )}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_8.3%] text-center">
              <ButtonActions />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemTabletTransaction;
