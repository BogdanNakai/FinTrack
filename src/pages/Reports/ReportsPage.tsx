import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import {
  categoriesValue,
  filterTimePeriod,
  categoriesData,
  GoalProgress,
  seriesBalanse,
  dataIncome,
  dataExpense,
  dataBudget,
  dataSpending,
  seriesBudgetSpending,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";
import ModalAddGoal from "@/components/Modal/ModalAddGoal";
import ExpenseBreakdownCard from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCard";
import ChartsBarsCard from "@/components/Card/ChartsBarsCard/ChartsBarsCard";
import GoalProgressCard from "@/components/Card/GoalProgressCard/GoalProgressCard";
import LineDiagram from "@/components/Card/LineDiagram/LineDiagram";

const ReportsPage = () => {
  return (
    <>
      <Header active="reports" />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center flex-wrap gap-2.5 justify-between py-[24px]">
                <h2 className="font-[Poppins] font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                  Reports / Analytics
                </h2>
                <ButtonPrimary textButton="Export" />
              </div>
              <div className="flex items-center gap-[20px] flex-wrap">
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={filterTimePeriod}
                    NameSelect="Time Period"
                  />
                </div>
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={categoriesValue}
                    NameSelect="All Categories"
                  />
                </div>
              </div>
              <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 lg:justify-items-normal justify-items-center">
                <ExpenseBreakdownCard
                  categoriesData={categoriesData}
                  title="Top 5 Expenses"
                />
                <ChartsBarsCard />
                <LineDiagram
                  uData={dataExpense}
                  pData={dataIncome}
                  seriesData={seriesBalanse}
                  title="Monthly trend"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Copyright />
    </>
  );
};

export default ReportsPage;
