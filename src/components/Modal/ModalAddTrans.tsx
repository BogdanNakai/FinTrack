import { categoriesValue, typeValue } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputData from "../form/InputData";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import SelectFilter from "../selectFilter/SelectFilter";

const ModalAddTrans = () => {
  return (
    <div className="w-160 h-107.5 p-6 bg-[#ffffff] rounded-xl absolute top-50% visible border-2 border-[#000]">
      <h3 className="text-2xl pb-5">Add Transaction</h3>
      <form className="h-auto grid grid-cols-1 gap-3.5">
        <label className="relative flex items-center">
          <InputData />
        </label>
        <label className="block w-40 h-10">
          <InputPopap
            name="description"
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
          <InputMoney name="amount" type="number" placeholder="Amount" />
        </label>
        <div className="flex justify-end items-center gap-3">
          <ButtonSecondary type="button" textButton="Cancel" />
          <ButtonPrimary type="button" textButton="Add" />
        </div>
      </form>
    </div>
  );
};

export default ModalAddTrans;
