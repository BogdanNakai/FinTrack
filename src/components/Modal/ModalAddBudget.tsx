import { categoriesValue } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import SelectFilter from "../selectFilter/SelectFilter";

const ModalAddBudget = () => {
  return (
    <div className="w-160 min-h-107.5 p-6 bg-[#ffffff] rounded-xl absolute top-50% visible border-1 border-[#000]">
      <h3 className="text-2xl pb-5">Add New Budget</h3>
      <form className="h-auto grid grid-cols-1 gap-3.5">
        <label className="w-full">
          <SelectFilter
            SelectOptionsList={categoriesValue}
            NameSelect={"All Category"}
          />
        </label>
        <label className="max-w-full w-40">
          <InputMoney
            name="budgetLimit"
            type="number"
            placeholder="Budget Limit"
          />
        </label>
        <label className="block max-w-full w-40 h-10">
          <InputPopap
            name="budgetName"
            placeholder="Budget Name"
            type="text"
          />
        </label>
        <div className="flex justify-end items-center gap-3">
          <ButtonSecondary type="button" textButton="Cancel" />
          <ButtonPrimary type="button" textButton="Add" />
        </div>
      </form>
    </div>
  );
};

export default ModalAddBudget;
