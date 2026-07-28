import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import InputData from "../Form/InputData";
import InputPopap from "../Form/InputPopap";
import SelectFilter from "../SelectFilter/SelectFilter";

const PopapaddTrans = () => { 
  const categoriesValue = [
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
  const typeValue = [
    { value: "income", label: "Income" },
    { value: "expense", label: "Expense" },
  ];
	return (
    <div className="w-160 h-107.5 p-6 bg-[#ffffff] rounded-xl absolute top-50% visible border-2 border-[#000]">
      <h3 className="text-2xl pb-5">Add Transaction</h3>
      <form className="h-auto grid grid-cols-1 gap-3.5">
        <label className="relative flex items-center">
          <InputData />
        </label>
        <label className="block w-40 h-10">
          <InputPopap
            name="Description"
            placeholder="Enter Description"
            type="text"
          />
        </label>
        <label className="w-full">
          <SelectFilter
            SelectOptionsList={categoriesValue}
            NameSelect={"All Category"}
          />
        </label>
        <label className="w-full">
          <SelectFilter
            SelectOptionsList={typeValue}
            NameSelect={"All Types"}
          />
        </label>
        <label className="max-w-full w-40">
          <InputPopap type="number" name="Amount" placeholder="Amount" />
        </label>
        <div className="flex justify-end items-center gap-3">
          <ButtonSecondary textButton="Cansel" />
          <ButtonPrimary textButton="Add" />
        </div>
      </form>
    </div>
  );
};

export default PopapaddTrans