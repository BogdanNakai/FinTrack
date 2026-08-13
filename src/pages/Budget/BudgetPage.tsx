import ButtonPrimaryActions from "@/components/Buttons/ButtonPrimaryAtions";
import ButtonsActionsList from "@/components/Buttons/ButtonsActionsList";
import BudgetCard from "@/components/Card/BudgetCart/BudgetCard";
import ExpenseBreakdownCard from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCard";
import LineDiagram from "@/components/Card/LineDiagram/LineDiagram";
import InputMonthe from "@/components/Form/InputMonthe";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import TabletBudget from "@/components/Tablets/TabletBudget";
import {
  categoriesData,
  categoriesValue,
  dataBudget,
  dataSpending,
  seriesBudgetSpending,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const BudgetPage = () => {
  return (
    <>
      <Header active="budget" />
      <main>
        <section className="py-[20px] lg:py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center justify-between py-[24px] flex-wrap gap-1.5">
                <div>
                  <h2 className="font-[Poppins] font-sans text-[20px] md:text-2xl text-[#1E293B] tracking-[0.02em] font-medium pb-[10px]">
                    Budget Planner
                  </h2>
                  <p className="text-[#64748B] text-[12px] md:text-[14px]">
                    Plan and monitor your monthly limits
                  </p>
                </div>
                <ButtonPrimaryActions textButton="Add New Budget" />
              </div>
              <div className="flex items-center max-[425px]:flex-wrap gap-1.5 md:gap-[20px] flex-nowrap">
                <div className="w-[220px]">
                  <InputMonthe />
                </div>
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={categoriesValue}
                    NameSelect="All Categories"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[5px] md:gap-[10px] lg:gap-[24px] max-[320px]:flex-wrap justify-start pb-[24px]">
                <BudgetCard title="Total Budget" amount={60000} type="budget" />
                <BudgetCard title="Total Spent" amount={43200} type="spent" />
                <BudgetCard title="Remaining" amount={16800} type="remaining" />
              </div>
              <div className="w-full overflow-x-auto">
                <div className="min-w-[768px]">
                  <TabletBudget />
                </div>
              </div>
              <div>
                <ButtonsActionsList />
              </div>
              <div className="">
                <h2 className="text-[20px] text-[#1E293B] font-semibold pb-[21px]">
                  Budget Insights
                </h2>
                <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 lg:justify-items-normal justify-items-center">
                  <LineDiagram
                    uData={dataBudget}
                    pData={dataSpending}
                    seriesData={seriesBudgetSpending}
                    title="Budget vs Spending Over Time"
                  />
                  <ExpenseBreakdownCard
                    categoriesData={categoriesData}
                    title="Category-wise Budget Allocation"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Copyright />
    </>
  );
};

export default BudgetPage;
