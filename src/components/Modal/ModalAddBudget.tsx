import { categoriesValue } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import SelectForm from "../form/SelectForm";
import { useForm } from "react-hook-form";
import type { IBudgetForm, TOnSubmitFormBudget } from "@/types/budget.type";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import { useActions } from "@/hooks/useActions";
import dayjs from "dayjs";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/ModalContexnt/useModalContext";
import FormInputMonth from "../form/FormInputMonth";
import { BudgetContext } from "@/context/BudgetContext/useBudgetContext";

const ModalAddBudget = () => {
  const { ACTIVE_USER_ID } = STORAGE_KEYS;
  const { addBudget, editBudget } = useActions();
  const {
    idRecord,
    openModalChanges,
    setOpenModal,
    setOpenModalMessageSuccess,
    setOpenModalChanges,
    blockScroll,
  } = useContext(ModalContext);
  const { resultFilterListBurget } = useContext(BudgetContext);
  const itemBudgetChenge = resultFilterListBurget.filter(
    (e) => e.idRecord === idRecord,
  )[0];
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<IBudgetForm>({
    mode: "onSubmit",
    defaultValues: {
      month: dayjs().format("YYYY-MM"),
    },
  });

  const onSubmit: TOnSubmitFormBudget = (data) => {
    const duplicate = resultFilterListBurget.filter(
      (e) => e.category === data.category,
    );

    if (duplicate.length) {
      setError("category", {
        type: "setValueAs",
        message: "Such a budget already exists",
      });
    } else {
      if (openModalChanges) {
        if (!itemBudgetChenge) return;
        data.idUser = getStorage(ACTIVE_USER_ID, "");
        data.idRecord = itemBudgetChenge.idRecord;
        editBudget(data);
      } else {
        data.idUser = getStorage(ACTIVE_USER_ID, "");
        data.idRecord = `budget_${Date.now()}`;
        addBudget(data);
      }

      reset();
      setOpenModal(false);
      setOpenModalMessageSuccess(true);
      setOpenModalChanges(false);
      blockScroll();
    }
  };

  useEffect(() => {
    if (openModalChanges) {
      if (!itemBudgetChenge) return;
      reset({
        category: itemBudgetChenge?.category,
        month: itemBudgetChenge?.month,
        budgetLimit: itemBudgetChenge?.budgetLimit,
        budgetName: itemBudgetChenge?.budgetName,
      });
      return;
    }
  }, [openModalChanges, reset, itemBudgetChenge]);

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
              errors={errors.category}
            />
          </label>
          <label className="max-w-full w-40">
            <InputMoney
              name="budgetLimit"
              register={register}
              type="number"
              placeholder="Budget Limit"
              errors={errors.budgetLimit}
            />
          </label>
          <label>
            <FormInputMonth control={control} name="month" />
          </label>
          <label className="block max-w-full w-40 h-10">
            <InputPopap
              name="budgetName"
              register={register}
              placeholder="Notes"
              type="text"
              errors={errors.budgetName}
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
