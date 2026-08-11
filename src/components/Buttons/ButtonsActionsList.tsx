const ButtonsActionsList = () => {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-[12px] py-[6px]">
        <button className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s]">
          Prev
        </button>
        <button className="bg-[#00B894] p-[10px] text-[#fff] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s]">
          1
        </button>
        <button className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s]">
          2
        </button>
        <button className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] w-[36px] h-[36px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s]">
          3
        </button>
        <button className="bg-[#fff] p-[10px] text-[#1E293B] font-medium text-[14px] border border-[#143a6c]/[0.04] rounded-[8px] flex items-center justify-center hover:text-[#fff] hover:bg-[#00DCA0] active:scale-[0.95] active:bg-[#BEEBD8] transition-[0.15s]">
          Next
        </button>
      </div>
    </>
  );
};

export default ButtonsActionsList;