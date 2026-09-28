import ButtonPrimaryActions from "@/components/buttons/ButtonPrimaryActions";
import ButtonsActionsList from "@/components/buttons/ButtonsActionsList";
import ModalAddTrans from "@/components/modal/ModalAddTrans";
import SelectFilter from "@/components/selectFilter/SelectFilter";
import {
  filterDateRange,
  filterNewestFirst,
  typeValue,
} from "@/context/AppContext";
import { ModalContext } from "@/context/ModalContex";
import TableTransaction from "@/features/transactions/component/TableTransaction";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";
import { useContext } from "react";

const TransactionsPage = () => {
  const { openModal } = useContext(ModalContext);

  return (
    <>
      <Header active="transactions" />
      <main>
        <section className="pt-12 relative">
          <div className="herro__container">
            <div className="flex flex-wrap gap-3 justify-between pb-6">
              <h2 className="font-[Poppins] font-sans text-[20px] md:text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                Transactions
              </h2>
              <ButtonPrimaryActions textButton={"Add Transaction"} type="button" />
            </div>
            <div className="flex flex-wrap min-[550px]:flex-nowrap gap-2.5 lg:gap-5 pb-6">
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <SelectFilter
                  SelectOptionsList={filterDateRange}
                  NameSelect="This Month"
                />
              </div>
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <SelectFilter
                  SelectOptionsList={typeValue}
                  NameSelect="All Types"
                />
              </div>
              <div className="max-w-full min-[550px]:max-w-56 w-full">
                <SelectFilter
                  SelectOptionsList={filterNewestFirst}
                  NameSelect="Newest First"
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
          {openModal && (
            <div className="absolute z-20 top-0 left-0 w-full h-full bg-[#0000003e] bg-opacity-50 flex justify-center items-center">
              <ModalAddTrans />
            </div>
          )}
        </section>
      </main>
      <Copyright />
    </>
  );
};

export default TransactionsPage;
