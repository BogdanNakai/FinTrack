import ProgressLine from "@/components/uii/ProgressLine/ProgressLine";
import { monyFormatter } from "@/context/AppContext";

const BudgetCard = ({ title, amount, type }) => {
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
          {monyFormatter.format(amount)}
        </p>
        <div className="flex items-center flex-grow-0 flex-shrink-1 relative gap-2 w-full">
          {type === "budget" ? (
            <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xstext-left text-green-500">
              for Oct 2025
            </p>
          ) : type === "spent" ? (
            <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xs text-left text-red-500">
              -8%
            </p>
          ) : type === "remaining" ? (
            <ProgressLine parsent={70} />
          ) : null}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default BudgetCard;
