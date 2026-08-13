import { Link } from "react-router-dom";
import ItemTabletRecent from "./ItemTabletRecent";

const TabletRecentTransactions = () => {
  return (
    <>
      <div
        className="flex flex-col justify-start items-start max-w-[920px] w-full relative overflow-hidden gap-4 p-6 rounded-xl bg-white"
        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
      >
        <p className="flex-grow-0 flex-shrink-0 text-xl font-semibold text-left text-slate-800">
          Recent Transactions
        </p>
        <div>
          <Link
            to="/transactions"
            className="flex-grow-0 flex-shrink-0 block text-sm font-medium text-left transition duration-200 hover:text-blue-400 text-blue-600 active:scale-[0.9] border-b-1 border-blue-600 "
          >
            View All
          </Link>
        </div>
        <div className="w-full overflow-x-auto">
          <div className="min-w-[760px]">
            <div className="flex justify-start items-start relative py-2.5 bg-[#f8f9fa] border-t-0 border-r-0 border-b-[0.4px] border-l-0 border-slate-500">
              <p className="flex-[0_0_36.84%] text-sm font-medium text-center text-slate-800">
                Transaction
              </p>
              <p className="flex-[0_0_23.68%] text-sm font-medium text-center text-slate-600">
                Category
              </p>
              <p className="flex-[0_0_23.68%] text-sm font-medium text-center text-slate-500">
                Date
              </p>
              <p className="flex-[0_0_18.42%] text-sm font-medium text-center text-slate-800">
                Amount
              </p>
            </div>
            <ItemTabletRecent />
          </div>
        </div>
      </div>
    </>
  );
};

export default TabletRecentTransactions;
