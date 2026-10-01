import { categoriesValue } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import SelectForm from "../form/SelectForm";
import { useForm } from "react-hook-form";
import type { IBudgetForm } from "@/types/budget.type";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { useActions } from "@/hooks/useActions";

const ModalAddBudget = () => {
  const { register, control, handleSubmit } = useForm<IBudgetForm>();
  const { ACTIVE_USER_ID } = STORAGE_KEYS;
  const { addBudget } = useActions();

  const onSubmit = (data: IBudgetForm) => {
    data.idUser = getStorage(ACTIVE_USER_ID, "");
    data.valute = "dolar";
    data.budgetSpent = 0; 

    addBudget(data);
  };

  return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-[#0000003e] flex justify-center items-center">
      <div className="w-160 min-h-90 max-h-80 p-6 bg-[#ffffff] rounded-xl visible mx-1.5">
        <h3 className="text-2xl pb-5">Add New Budget</h3>
        <form
          className="h-full grid grid-cols-1 gap-3.5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="w-full">
            <SelectForm
              options={categoriesValue}
              name="category"
              label="All Categories"
              control={control}
            />
          </label>
          <label className="max-w-full w-40">
            <InputMoney
              name="budgetLimit"
              register={register}
              type="number"
              placeholder="Budget Limit"
            />
          </label>
          <label className="block max-w-full w-40 h-10">
            <InputPopap
              name="budgetName"
              register={register}
              placeholder="Budget Name"
              type="text"
            />
          </label>
          <div className="flex justify-end items-center gap-3">
            <ButtonSecondary type="button" textButton="Cancel" />
            <ButtonPrimary type="submit" textButton="Add" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddBudget;
