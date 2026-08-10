import ItemTablet from "./ItemTablet";

const TabletBudget = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#E6E6E6] text-[#64748B] flex items-center gap-[16px] max-h-[56px] h-[56px] px-[10px]">
          <div className="text-[14px] font-medium flex-[0_1_18%]">Category</div>
          <div className="text-[14px] font-medium flex-[0_1_13.3%]">Limit</div>
          <div className="text-[14px] font-medium flex-[0_1_13.3%]">Spent</div>
          <div className="text-[14px] font-medium flex-[0_1_13.3%]">
            Remaining
          </div>
          <div className="text-[14px] font-medium flex-[0_1_25%] text-center">
            Progress
          </div>
          <div className="text-[14px] font-medium flex-[0_1_8.3%] text-center">
            Actions
          </div>
        </div>
        <ItemTablet />
      </div>
    </>
  );
};

export default TabletBudget;
