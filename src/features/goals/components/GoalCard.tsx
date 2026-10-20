import ProgressLine from "@/components/ui/progressLine/ProgressLine";
import { useContext, useState } from "react";
import ButtonActions from "@/components/buttons/ButtonActions";
import { GoalContext } from "@/context/GoalContext/useGoalsContext";
import dayjs from "dayjs";

const GoalCard = () => {
  const { goalsTransactionAmount } = useContext(GoalContext);
  const [activeCardId, setActiveCardId] = useState(null);
  const toggleCard = (id) => {
    setActiveCardId(activeCardId === id ? null : id);
  };

  return (
    <>
      {goalsTransactionAmount.map((goal, index) => {
        const percent = goal.targetAmount
          ? Math.round((goal.savedAmount / goal.targetAmount) * 100)
          : 0;
        const isCurrentActive = activeCardId === goal.idRecord;
        percent >= 100 ? (goal.status = "Completed") : null;

        return (
          <div
            onClick={() => toggleCard(goal.idRecord)}
            key={index}
            className={`p-[16px] shadow-[0_6px_18px_0_rgba(2,6,23,0.06)] bg-[#fff] rounded-[12px] max-w-[360px] w-full grid gap-[12px] transition-all duration-300 ease-in-out cursor-pointer ${
              isCurrentActive ? "max-h-[400px]" : "max-h-[250px]"
            }`}
          >
            <div>
              <h3 className="text-[16px] font-semibold tracking-tight">
                {goal.goalName}
              </h3>
              <p className="text-[12px] text-gray-700">{goal.category}</p>
            </div>
            <p className="text-[16px] text-[#64748B] tracking-tight flex items-center">
              {goal.targetAmount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}{" "}
              Target |{" "}
              {goal.savedAmount.toLocaleString("en-US", {
                minimumFractionDigits: 0,
              })}{" "}
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
            <div
              onClick={(e) => e.stopPropagation()}
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isCurrentActive
                  ? "max-h-40 opacity-100 mt-[4px]"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="pt-[4px]">
                <p className="text-sm font-semibold tracking-tight text-left pb-3">
                  By {dayjs(goal.endDate).format("DD MMM YYYY")}
                </p>
                <ButtonActions idRecord={goal.idRecord} typeButton="goal" />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GoalCard;
