import ProgressLine from "@/components/ui/progressLine/ProgressLine";
import { useAppSelector } from "@/app/hooks";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";

const GoalCard = () => {
  const idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
  const goals = useAppSelector((state) => state.goals.goals).filter(
    (goal) => goal.idUser === idUser,
  );

  return (
    <>
      {goals.map((goal, index) => {
        const percent = goal.targetAmount
          ? Math.round((goal.savedAmount / goal.targetAmount) * 100)
          : 0;

        return (
          <div key={index} className="p-[16px] shadow-[0_6px_18px_0_rgba(2,6,23,0.06)] bg-[#fff] rounded-[12px] max-w-[360px] w-full grid gap-[12px]">
            <h3 className="text-[16px] font-semibold tracking-tight">
              {goal.goalName}
            </h3>
            <p className="text-[16px] text-[#64748B] tracking-tight flex items-center">
              {goal.targetAmount.toLocaleString("en-US", { minimumFractionDigits: 0 })}{" "}
              Target |{" "}
              {goal.savedAmount.toLocaleString("en-US", { minimumFractionDigits: 0 })}{" "}
              Saved
            </p>
            <div>
              <ProgressLine parsent={percent} />
            </div>
            <div>
              {goal.status === "Ongoing" ? (
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
