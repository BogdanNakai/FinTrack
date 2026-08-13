import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ButtonPrimaryActions from "@/components/Buttons/ButtonPrimaryAtions";
import ButtonsActionsList from "@/components/Buttons/ButtonsActionsList";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import TabletTransaction from "@/components/Tablets/TablletTransaction";
import { filterDateRange, filterNewestFirst, filterTimePeriod, typeValue } from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const TransactionsPage = () => {
  return (
    <>
      <Header active="transactions" />
      <main>
        <section className="pt-12">
          <div className="herro__container">
            <div className="flex flex-wrap gap-3 justify-between pb-6">
              <h2 className="font-[Poppins] font-sans text-[20px] md:text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                Transactions
              </h2>
              <ButtonPrimaryActions textButton={"Add Transaction"} />
            </div>
            <div className="grid grid-cols-2 min-[600px]:grid-cols-4 gap-2.5 lg:gap-5 pb-6">
              <div className="max-w-56 w-full ">
                <SelectFilter
                  SelectOptionsList={filterDateRange}
                  NameSelect="This Month"
                />
              </div>
              <div className="max-w-56 w-full">
                <SelectFilter
                  SelectOptionsList={typeValue}
                  NameSelect="All Types"
                />
              </div>
              <div className="max-w-56 w-full">
                <SelectFilter
                  SelectOptionsList={filterNewestFirst}
                  NameSelect="Newest First"
                />
              </div>
            </div>
            <div>
              <div className="w-full overflow-x-auto pb-6">
                <div className="min-w-[768px]">
                  <TabletTransaction />
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
    </>
  );
};

export default TransactionsPage;
