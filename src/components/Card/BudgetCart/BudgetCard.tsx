import ProgressLine from "@/components/uii/ProgressLine/ProgressLine";

const BudgetCard = () => { 
	return (
    <>
   
      	<div
	        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[120px] w-[300px] relative overflow-hidden gap-2 p-4 rounded-xl bg-white"
	        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
	      >
	        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">
	          Total Budget
	        </p>
	        <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-slate-800">
	          ₹ 60,000
	        </p>
	        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
	          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-green-500">
	            for Oct 2025
	          </p>
	        </div>
	      </div>
	      <div
	        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[120px] w-[300px] relative overflow-hidden gap-2 p-4 rounded-xl bg-white"
	        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
	      >
	        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">
	          Total Spent
	        </p>
	        <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-slate-800">
	          ₹ 43,200
	        </p>
	        <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2">
	          <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-red-500">
	            -8%
	          </p>
	        </div>
	      </div>
	      <div
	        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[120px] w-[300px] relative overflow-hidden gap-2 p-4 rounded-xl bg-white"
	        style={{ boxShadow: "0px 6px 18px 0 rgba(2,6,23,0.06)" }}
	      >
	        <p className="flex-grow-0 flex-shrink-0 text-xs text-left text-slate-500">
	          Remaining
	        </p>
	        <p className="flex-grow-0 flex-shrink-0 text-[28px] font-medium text-left text-slate-800">
	          ₹ 16,800
	        </p>
	        <ProgressLine parsent={70} />
	      </div>
      
    </>
  );
};

export default BudgetCard