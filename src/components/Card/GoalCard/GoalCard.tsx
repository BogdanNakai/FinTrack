import ProgressLine from "@/components/uii/ProgressLine/ProgressLine";
import { listGoal } from "@/context/AppContext";

const GoalCard = () => {
  return (
    <>
      {listGoal.map((e) => {
        const parsent = Math.round(e.saved / (e.target / 100));
        return (
          <div className="p-[16px] shadow-[0_6px_18px_0_rgba(2,6,23,0.06)] bg-[#fff] rounded-[12px] max-w-[360px] w-full grid gap-[12px]">
            <h3 className="text-[16px] font-semibold tracking-tight">
              {e.label}
            </h3>
            <p className="text-[16px] text-[#64748B] tracking-tight flex items-center">
              {e.target.toLocaleString("en-US", { minimumFractionDigits: 0 })}{" "}
              Target |{" "}
              {e.saved.toLocaleString("en-US", { minimumFractionDigits: 0 })}{" "}
              Saved
            </p>
            <div>
              <ProgressLine parsent={parsent} />
            </div>
            <div>
              {e.status === "Ongoing" ? (
                <div className="text-[#00B894] bg-[#DCFCE7] rounded-[20px] text-[8px] tracking-tight w-[57px] text-center py-[4px]">
                  Ongoing
                </div>
              ) : (
                <div className="text-[#fff] bg-[#22C55E] rounded-[20px] text-[8px] tracking-tight w-[57px] text-center py-[4px]">
                  Completed
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GoalCard;
