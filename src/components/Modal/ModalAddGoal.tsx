import { categoriesValue, statusGoal } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputData from "../form/InputData";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import SelectForm from "../form/SelectForm";
import { useForm } from "react-hook-form";
import type { IGoalForm, TOnSubmitFormGoal } from "@/types/goals.types";
import { useActions } from "@/hooks/useActions";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";

const ModalAddGoal = () => {
  const { register, control, handleSubmit } = useForm<IGoalForm>();
  const { addGoal } = useActions();

  const onSubmit: TOnSubmitFormGoal = (data) => {
    data.idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
    data.valute = "dolar";
    data.savedAmount = 0;

    addGoal(data);
  };

  return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-[#0000003e] flex justify-center items-center">
      <div className="w-160 min-h-107.5 p-6 bg-[#ffffff] rounded-xl">
        <h3 className="text-2xl pb-5">Add New Goal</h3>
        <form
          className="h-auto grid grid-cols-1 gap-3.5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className="block max-w-full w-40 h-10">
            <InputPopap
              name="goalName"
              register={register}
              placeholder="Goal Name"
              type="text"
            />
          </label>
          <label className="max-w-full w-40">
            <InputMoney
              name="targetAmount"
              register={register}
              type="number"
              placeholder="Target Amount"
            />
          </label>
          <label className="w-full">
            <InputData
              name="startDate"
              control={control}
              placeholder="Start Date"
            />
          </label>
          <label className="w-full">
            <InputData
              name="endDate"
              control={control}
              placeholder="End Date"
            />
          </label>
          <label className="w-full">
            <SelectForm
              options={categoriesValue}
              name="category"
              label="All Categories"
              control={control}
            />
          </label>
          <label className="w-full">
            <SelectForm
              options={statusGoal}
              name="status"
              label="Status"
              control={control}
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

export default ModalAddGoal;
