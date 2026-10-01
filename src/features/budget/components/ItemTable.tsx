import { useAppSelector } from "@/app/hooks";
import ButtonActions from "@/components/buttons/ButtonActions";
import ElementTitleCategory from "@/components/ui/ElementTitleCategory";
import ProgressLine from "@/components/ui/progressLine/ProgressLine";
import { moneyFormatter } from "@/context/AppContext";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";

const ItemTable = () => {

  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const listBudgets = useAppSelector((state) => state.budgets.budgets).filter((budget) => budget.idUser === idUser);

  return (
    <>
      {listBudgets.map((e, i) => {
        return (
          <div
            key={i}
            className="bg-[#fff] hover:bg-[#F2F7FF] text-[#1E293B] flex items-center gap-[16px] min-h-[56px]  px-[10px] border-y border-[#143a6c16]"
          >
            <div className="text-[14px] font-normal flex-[0_1_18%]">
              <ElementTitleCategory category={e.category} />
            </div>
            <div className="text-[14px] font-normal flex-[0_1_13.3%]">
              {moneyFormatter.format(e.budgetLimit)}
            </div>
            <div className="text-[14px] font-normal flex-[0_1_13.3%]">
              {moneyFormatter.format(e.budgetSpent)}
            </div>
            <div className="text-[14px] font-normal flex-[0_1_13.3%]">
              {moneyFormatter.format(e.budgetLimit - e.budgetSpent)}
            </div>
            <div className="text-[14px] font-normal flex-[0_1_25%] text-center">
              <ProgressLine parsent={e.budgetSpent / (e.budgetLimit / 100)} />
            </div>
            <div className="text-[14px] font-normal flex-[0_1_8.3%]">
              <ButtonActions />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ItemTable;
