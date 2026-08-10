import { listTransactionBudget } from "@/context/AppContext";
import ElementTitleCategory from "./ElementTitleCategory";
import ProgressLine from "../uii/ProgressLine/ProgressLine";
import ButtonActions from "../Buttons/ButtonActions";

const ItemTablet = () => {

	const monyFormatter = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
	
  return (
    <>
      {listTransactionBudget.map((e: any) => {
        return (
          <div className="bg-[#fff] text-[#1E293B] flex items-center gap-[16px] min-h-[56px]  px-[10px] border-y border-[#143a6c16]">
            <div className="text-[14px] font-regular flex-[0_1_18%]">
              <ElementTitleCategory category={e.categoria} />
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {monyFormatter.format(e.limit)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {monyFormatter.format(e.spent)}
            </div>
            <div className="text-[14px] font-regular flex-[0_1_13.3%]">
              {monyFormatter.format(e.limit - e.spent)}
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

export default ItemTablet;
