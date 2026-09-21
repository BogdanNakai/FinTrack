import ButtonActions from "@/components/buttons/ButtonActions";
import ElementTitleCategory from "@/components/ui/ElementTitleCategory";
import ProgressLine from "@/components/ui/progressLine/ProgressLine";
import { listTransactionBudget, moneyFormatter } from "@/context/AppContext";

const ItemTable = () => {
  return (
    <>
      {listTransactionBudget.map((e, i) => {
        return (
          <div key={i} className="bg-[#fff] hover:bg-[#F2F7FF] text-[#1E293B] flex items-center gap-[16px] min-h-[56px]  px-[10px] border-y border-[#143a6c16]">
            <div className="text-[14px] font-regular flex-[0_1_18%]">
              <ElementTitleCategory category={e.category} />
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {moneyFormatter.format(e.limit)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {moneyFormatter.format(e.spent)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {moneyFormatter.format(e.limit - e.spent)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_25%] text-center">
              <ProgressLine parsent={e.spent / (e.limit / 100)} />
            </div>
            <div className="text-[14px] font-regular flex-[0_1_8.3%]">
              <ButtonActions />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemTable;
