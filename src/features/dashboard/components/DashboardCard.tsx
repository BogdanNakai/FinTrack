import trendUpp from "@/assets/icon_trendUpp.svg";
import trendDown from "@/assets/icon_trendDown.svg";
import { monyFormatter } from "@/context/AppContext";
import type { IDashboardCard } from "./DashboardCard.type";

const DashboardCard = ({ title, balanse, growth }: IDashboardCard) => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-start flex-[0_1_150px] sm:flex-[0_1_150px] lg:flex-[0_1_260px] min-w-[150px] md:min-w-[190px] w-full relative overflow-hidden gap-2 p-2.5 md:p-4 rounded-xl bg-white"
        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
      >
        <p className="flex-grow-0 flex-shrink-1 text-[10px] md:text-xs text-left text-slate-500">
          {title}
        </p>
        <p className="flex-grow-0 flex-shrink-1 text-[22px] md:text-[28px] font-medium text-left text-slate-800">
          {monyFormatter.format(Number(balanse))}
        </p>

        <div className="flex justify-center items-center flex-grow-0 flex-shrink-1  relative gap-2">
          {growth > 0 ? (
            <>
              <p className="flex-grow-0 flex-shrink-1 text-[8px] max-[450]:text-[10px] md:text-xs text-left text-green-500 wrap-break-word">
                {growth}% this month
              </p>
              <img src={trendUpp} alt="Image" />
            </>
          ) : (
            <>
              <p className="flex-grow-0 flex-shrink-1 text-[8px] max-[450]:text-[10px] md:text-xs text-left text-red-500 wrap-break-word">
                {growth}% from last month
              </p>

              <img src={trendDown} alt="Image" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
