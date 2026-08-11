import trendUpp from "@/assets/icon_trendUpp.svg";
import trendDown from "@/assets/icon_trendDown.svg";
import { monyFormatter } from "@/context/AppContext";

const DashboardCardRate = ({ title, balanse, growth }) => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 max-w-[260px] w-full relative overflow-hidden gap-2 p-4 rounded-xl bg-white"
        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">
          {title}
        </p>
        <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-slate-800">
          {balanse}%
        </p>

        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
          {growth > 0 ? (
            <>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-green-500">
                {growth}% improvement
              </p>
              <img src={trendUpp} alt="Image" />
            </>
          ) : (
            <>
              <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-red-500">
                {growth}% deterioration
              </p>

              <img src={trendDown} alt="Image" />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default DashboardCardRate;
