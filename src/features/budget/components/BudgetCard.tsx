import ProgressLine from "@/components/ui/progressLine/ProgressLine";
import { moneyFormatter } from "@/context/AppContext";
import type { IBudgetCard } from "../Budget.type";
import { useContext } from "react";
import { BudgetContext } from "@/context/BudgetContext/useBudgetContext";
import dayjs from "dayjs";

const BudgetCard = ({ title, type }: IBudgetCard) => {
  const { totalBudgetAmountMonth, totalBudgetAmountLastMonth, month } =
    useContext(BudgetContext);
  const totalBudget = totalBudgetAmountMonth.totalBudget
    ? moneyFormatter.format(totalBudgetAmountMonth.totalBudget)
    : 0;
  const totalSpent = totalBudgetAmountMonth.totalSpent
    ? moneyFormatter.format(totalBudgetAmountMonth.totalSpent)
    : 0;
  const remaining = totalBudgetAmountMonth.totalBudget
    ? moneyFormatter.format(
        totalBudgetAmountMonth.totalBudget - totalBudgetAmountMonth?.totalSpent,
      )
    : 0;
  const parcent = totalBudgetAmountMonth.totalBudget
    ? (totalBudgetAmountMonth.totalSpent / totalBudgetAmountMonth.totalBudget) *
      100
    : 0;
  const comparedLastMonth =
    totalBudgetAmountLastMonth.totalSpent !== 0
      ? Math.floor(
          (totalBudgetAmountMonth.totalSpent /
            totalBudgetAmountLastMonth.totalSpent) *
            100 -
            100,
        )
      : 0;

  return (
    <>
      <div
        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-1 h-auto md:h-[120px] w-full max-w-[300px] relative overflow-hidden gap-2 p-2 md:p-4 rounded-xl bg-white"
        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
      >
        <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xs text-left text-slate-500">
          {title}
        </p>
        <p className="flex-grow-0 flex-shrink-1 text-[22px] md:text-[28px] font-medium text-left text-slate-800">
          {type === "budget"
            ? totalBudget
            : type === "spent"
              ? totalSpent
              : remaining}
        </p>
        <div className="flex items-center flex-grow-0 flex-shrink-1 relative gap-2 w-full">
          {type === "budget" ? (
            <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xs text-left text-green-500">
              for {dayjs(month).format("MMM, YYYY")}
            </p>
          ) : type === "spent" ? (
            <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xs text-left text-red-500">
              {comparedLastMonth}
              {comparedLastMonth < 0
                ? `% less`
                : comparedLastMonth > 0
                  ? `% more`
                  : ""}{" "}
              than last month
            </p>
          ) : type === "remaining" ? (
            <ProgressLine parsent={parcent} />
          ) : null}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default BudgetCard;
