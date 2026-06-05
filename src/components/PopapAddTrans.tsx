import type { ICategory } from "@/types/categories.type";
import SelectFilter from "./SelectFilter";

const PopapaddTrans = () => { 

  const categoriesValue: ICategory[] = [
    { value: "savings-account", label: "Savings Account" },
    { value: "health-fitness", label: "Health & Fitness" },
    { value: "bills-utilities", label: "Bills & Utilities" },
    { value: "feelance", label: "Freelance" },
    { value: "investment", label: "Investment" },
    { value: "shopping", label: "Shopping" },
    { value: "transportationt", label: "Transportation" },
    { value: "salary", label: "Salary" },
    { value: "food-dining", label: "Food & Dining" },
  ];
  const typeValue: ICategory[] = [
    { value: "income", label: "Income" },
    { value: "expense", label: "Expense" },
  ];

	return (
    <div className="w-160 h-107.5 p-6 bg-[#ffffff] rounded-xl absolute top-50% visible border-2 border-[#000]">
      <h3 className="text-2xl pb-5">Add Transaction</h3>
      <form className="h-auto grid grid-cols-1 gap-3.5">
        <label className="relative flex items-center">
          <input
            type="date"
            className="absolute left-2.5 w-5 h-5 overflow-hidden"
          />
          <input
            type="text"
            placeholder="Title"
            className="h-11 bg-white w-full rounded-xl pl-9 outline-[#2684FF] border-2 border-[#e2e8f0]"
          />
        </label>
        <label className="block w-40 h-10">
          <input
            type="text"
            name="Description"
            placeholder="Enter Description"
            id=""
            className="h-11 bg-white w-full rounded-xl pl-3 outline-[#2684FF] border-2 border-[#e2e8f0]"
          />
        </label>
        <label className="w-full">
          <SelectFilter
            options={categoriesValue}
            titlePlaceholder="All Category"
          />
        </label>
        <label className="w-full">
          <SelectFilter options={typeValue} titlePlaceholder="All Types" />
        </label>
        <label className="w-21">
          <input
            type="number"
            name=""
            placeholder="Amount"
            id=""
            className="h-11 pl-3 bg-white w-full rounded-xl outline-[#2684FF] border-2 border-[#e2e8f0]"
          />
        </label>
        <div className="flex justify-end items-center gap-3">
          <button
            type="button"
            className="w-35 h-10 text-[#00b894] border-1 border-solid border-[#00b894] rounded-2xl"
          >
            Cancel
          </button>
          <button
            type="button"
            className="w-35 h-10 bg-[#00b894]  rounded-2xl text-white"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PopapaddTrans