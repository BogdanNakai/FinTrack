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
import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/ModalContexnt/useModalContext";
import { GoalContext } from "@/context/GoalContext/useGoalsContext";

const ModalAddGoal = () => {
  const {
    idRecord,
    setOpenModal,
    setOpenModalMessageSuccess,
    setOpenModalChanges,
    blockScroll,
    openModalChanges,
  } = useContext(ModalContext);
  const { goalsTransactionAmount } = useContext(GoalContext);
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IGoalForm>();
  const { addGoal, editGoal } = useActions();
  const itemGoalChenge = goalsTransactionAmount.filter(
    (e) => e.idRecord === idRecord,
  )[0];

  const onSubmit: TOnSubmitFormGoal = (data) => {
    const duplicate = goalsTransactionAmount.find(
      (e) => e.category === data.category,
    );

    if (openModalChanges) {
      if (!itemGoalChenge) return;
      if (duplicate && duplicate.idRecord !== idRecord) {
        setError("category", {
          type: "setValueAs",
          message: "1",
        });
        return;
      }
      data.idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
      data.savedAmount;
      data.idRecord = itemGoalChenge.idRecord;
      editGoal(data);
    } else {
       if (duplicate) {
         setError("category", {
           type: "setValueAs",
           message: "2",
         });
         return;
       }
      data.idUser = getStorage(STORAGE_KEYS.ACTIVE_USER_ID, "");
      data.savedAmount;
      data.idRecord = `goals_${Date.now()}`;
      addGoal(data);
    }

    setOpenModal(false);
    setOpenModalMessageSuccess(true);
    setOpenModalChanges(false);
    blockScroll();
  };

  useEffect(() => {
    if (openModalChanges) {
      if (!itemGoalChenge) return;
      reset({
        goalName: itemGoalChenge?.goalName,
        targetAmount: itemGoalChenge?.targetAmount,
        startDate: itemGoalChenge?.startDate,
        endDate: itemGoalChenge?.endDate,
        category: itemGoalChenge?.category,
        status: itemGoalChenge?.status,
      });
      return;
    }
  }, [openModalChanges, reset, itemGoalChenge]);

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
              errors={errors.goalName}
            />
          </label>
          <label className="max-w-full w-40">
            <InputMoney
              name="targetAmount"
              register={register}
              type="number"
              placeholder="Target Amount"
              errors={errors.targetAmount}
            />
          </label>
          <label className="w-full">
            <InputData
              name="startDate"
              control={control}
              placeholder="Start Date"
              errors={errors.startDate}
            />
          </label>
          <label className="w-full">
            <InputData
              name="endDate"
              control={control}
              placeholder="End Date"
              errors={errors.endDate}
            />
          </label>
          <label className="w-full">
            <SelectForm
              options={categoriesValue}
              name="category"
              label="All Categories"
              control={control}
              errors={errors.category}
            />
          </label>
          <label className="w-full">
            <SelectForm
              options={statusGoal}
              name="status"
              label="Status"
              control={control}
              errors={errors.status}
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
