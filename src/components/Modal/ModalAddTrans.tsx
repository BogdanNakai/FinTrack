import { categoriesValue, typeValue } from "@/context/AppContext";
import ButtonPrimary from "../buttons/ButtonPrimary";
import ButtonSecondary from "../buttons/ButtonSecondary";
import InputData from "../form/InputData";
import InputMoney from "../form/InputMoney";
import InputPopap from "../form/InputPopap";
import { useForm, useWatch } from "react-hook-form";
import { useActions } from "@/hooks/useActions";
import SelectForm from "../form/SelectForm";
import { getStorage } from "@/services/localStorage";
import { STORAGE_KEYS } from "@/services/storageKeys";
import type {
  ITransactionForm,
  TOnSubmitFormTransaction,
} from "@/types/transaction.types";
import { useContext, useEffect } from "react";
import { ModalContext } from "@/context/ModalContext";
import dayjs from "dayjs";
import { useAppSelector } from "@/app/hooks";

const ModalAddTrans = () => {
  const { ACTIVE_USER_ID } = STORAGE_KEYS;
  const { addTransaction, editTransaction } = useActions();
  const {
    setOpenModalTransactions,
    setOpenModalMessageSuccess,
    openModalTransactionChanges,
    setOpenModalTransactionChanges,
    idTransaction,
    blockScroll,
  } = useContext(ModalContext);
  const transactions = useAppSelector(
    (state) => state.transactions.transactions,
  ).filter((transaction) => transaction.idTransaction === idTransaction);
  const transaction = transactions[0];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<ITransactionForm>({
    mode: "onSubmit",
    defaultValues: {
      date: dayjs().format("YYYY-MM-DD"),
    },
  });

  const onSubmit: TOnSubmitFormTransaction = (data) => {
    if (!openModalTransactionChanges) {
      data.idUser = getStorage(ACTIVE_USER_ID, "");
      data.valute = "dolar";
      data.idTransaction = `transaction_${Date.now()}`;
      addTransaction(data);
    } else {
      if (!transaction) return;
      data.idUser = getStorage(ACTIVE_USER_ID, "");
      data.valute = "dolar";
      data.idTransaction = openModalTransactionChanges
        ? transactions[0]?.idTransaction
        : `transaction_${Date.now()}`;
      editTransaction(data);
    }
    reset();
    setOpenModalTransactions(false);
    setOpenModalMessageSuccess(true);
    setOpenModalTransactionChanges(false);
    blockScroll();
  };

  const transactionType = useWatch({ control, name: "type" });

  useEffect(() => {
    if (openModalTransactionChanges) {
      if (!transaction) return;
      reset({
        category: transaction?.category,
        date: transaction?.date,
        description: transaction?.description,
        amount: transaction?.amount,
        type: transaction?.type,
      });
      return;
    }
  }, [openModalTransactionChanges, reset, transaction]);

  return (
    <div className="fixed z-100 top-0 left-0 w-full h-full bg-[#0000003e] flex justify-center items-center">
      <div className="w-160 h-107.5 p-6 bg-[#ffffff] rounded-xl visible mx-1.5">
        <h3 className="text-2xl pb-5">Add Transaction</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="h-auto grid grid-cols-1 gap-3.5"
        >
          <label className="relative flex items-center">
            <InputData name="date" control={control} />
          </label>
          <label className="block w-40 h-10">
            <InputPopap
              register={register}
              name="description"
              placeholder="Enter Description"
              type="text"
              errors={errors.description}
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
              options={typeValue}
              name="type"
              label="All Types"
              control={control}
              errors={errors.type}
            />
          </label>
          <label className="max-w-full w-40">
            <InputMoney
              name="amount"
              type="number"
              placeholder="Amount"
              register={register}
              errors={errors.amount}
              isExpense={transactionType === "Expense"}
            />
          </label>
          <div className="flex justify-end items-center gap-3">
            <ButtonSecondary type="button" textButton="Cancel" />
            <ButtonPrimary type="submit" textButton="Add" isValid={isValid} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddTrans;
