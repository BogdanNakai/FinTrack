import ItemTablet from "./ItemTablet";
import ItemTabletTransaction from "./ItemTabletTransaction";

const TabletTransaction = () => {
  return (
    <>
      <div className="">
        <div className="bg-[#E6E6E6] text-[#64748B] flex justify-center items-center gap-[16px] max-h-[56px] h-[56px] px-[10px]">
          <div className="text-[14px] font-medium flex-[0_1_10%]">Date</div>
          <div className="text-[14px] font-medium flex-[0_1_18.3%]">
            Category
          </div>
          <div className="text-[14px] font-medium flex-[0_1_24.5%]">
            Description
          </div>
          <div className="text-[14px] font-medium flex-[0_1_11.6%]">Amount</div>
          <div className="text-[14px] font-medium flex-[0_1_8.3%] text-center">
            Type
          </div>
          <div className="text-[14px] font-medium flex-[0_1_8.3%] text-center">
            Actions
          </div>
        </div>
        <ItemTabletTransaction />
      </div>
    </>
  );
};

export default TabletTransaction;
