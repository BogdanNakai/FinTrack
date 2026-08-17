import { categoriesValue } from "@/context/AppContext";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";
import InputMony from "../Form/InputMony";
import InputPopap from "../Form/InputPopap";
import SelectFilter from "../SelectFilter/SelectFilter";

const ModalAddBudget = () => {
  return (
    <div className="w-160 min-h-107.5 p-6 bg-[#ffffff] rounded-xl absolute top-50% visible border-1 border-[#000]">
      <h3 className="text-2xl pb-5">Add New Goal</h3>
      <form className="h-auto grid grid-cols-1 gap-3.5">
        <label className="w-full">
          <SelectFilter
            SelectOptionsList={categoriesValue}
            NameSelect={"All Category"}
          />
        </label>
        <label className="max-w-full w-40">
          <InputMony name="Budget" type="number" placeholder="Budget limit" />
        </label>
        <label className="block max-w-full w-40 h-10">
          <InputPopap name="goalName" placeholder="Goal Name" type="text" />
        </label>
        <div className="flex justify-end items-center gap-3">
          <ButtonSecondary type="button" textButton="Cansel" />
          <ButtonPrimary type="button" textButton="Add" />
        </div>
      </form>
    </div>
  );
};

export default ModalAddBudget;
