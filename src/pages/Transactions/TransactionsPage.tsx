import ButtonPrimaryActions from "@/components/buttons/ButtonPrimaryActions";
import ButtonsActionsList from "@/components/buttons/ButtonsActionsList";
import FilterSelect from "@/components/form/FilterSelect";
import Message from "@/components/message/Message";
import ModalAddTrans from "@/components/modal/ModalAddTrans";
import ModalDeleteTransactions from "@/components/modal/ModalDeleteTransaction";
import {
  filterDateRange,
  filterNewestFirst,
  typeValue,
} from "@/context/AppContext";
import { ModalContext } from "@/context/ModalContext";
import TableTransaction from "@/features/transactions/component/TableTransaction";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";
import { useContext, useState } from "react";

const TransactionsPage = () => {
  const {
    openModalTransactions,
    openModalMessageSuccess,
    openModalMessageFailed,
    openModalMessageDelete,
  } = useContext(ModalContext);
  const [dateRange, setDateRange] = useState("");
  const [transactionType, setTransactionType] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  return (
    <>
      <Header active="transactions" />
      <main>
        <section className="pt-12">
          <div className="herro__container">
            <div className="flex flex-wrap gap-3 justify-between pb-6">
              <h2 className="font-sans text-[20px] md:text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                Transactions
              </h2>
              <ButtonPrimaryActions
                textButton={"Add Transaction"}
                type="button"
              />
            </div>
            <div className="flex flex-wrap min-[550px]:flex-nowrap gap-2.5 lg:gap-5 pb-6">
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <FilterSelect
                  options={filterDateRange}
                  label="This Month"
                  value={dateRange}
                  onChange={setDateRange}
                />
              </div>
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <FilterSelect
                  options={typeValue}
                  label="All Types"
                  value={transactionType}
                  onChange={setTransactionType}
                />
              </div>
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <FilterSelect
                  options={filterNewestFirst}
                  label="Newest First"
                  value={sortOrder}
                  onChange={setSortOrder}
                />
              </div>
            </div>
            <div>
              <div className="w-full overflow-x-auto pb-6">
                <div className="min-w-[768px]">
                  <TableTransaction />
                </div>
              </div>
              <div>
                <ButtonsActionsList />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Copyright />
      {openModalTransactions && <ModalAddTrans />}
      {openModalMessageSuccess && (
        <Message textMessage="Transaction added successfully!" type="Success" />
      )}
      {openModalMessageFailed && (
        <Message
          textMessage="Failed to add transaction. Please try again."
          type="Failed"
        />
      )}
      {openModalMessageDelete && (
        <ModalDeleteTransactions />
      )}
    </>
  );
};

export default TransactionsPage;
