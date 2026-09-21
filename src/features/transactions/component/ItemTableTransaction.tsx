import ButtonActions from "@/components/buttons/ButtonActions";
import ElementTitleCategory from "@/components/ui/ElementTitleCategory";
import { listTransaction, moneyFormatter } from "@/context/AppContext";

const ItemTableTransaction = () => {
  return (
    <>
      {listTransaction.map((e, i) => {
        return (
          <div
            key={i}
            className="bg-white hover:bg-[#F2F7FF] text-[#1E293B] flex justify-center items-center gap-[16px] min-h-[56px]  px-[10px] border-y border-[#143a6c16]"
          >
            <div className="text-[14px] font-regular flex-[0_1_10%]">
              {new Date(e.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_18.3%]">
              <ElementTitleCategory category={e.category} />
            </div>
            <div className="text-[14px] font-regular flex-[0_1_24.5%]">
              {e.description}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_11.6%]">
              {moneyFormatter.format(e.amount)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_8.3%] text-center">
              {e.type === "expense" ? (
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

export default ItemTableTransaction;
