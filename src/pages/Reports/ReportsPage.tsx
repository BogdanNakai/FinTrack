import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ChartsBarsCart from "@/components/Cart/ChartsBarsCard/ChartsBarsCart";
import GoalProgressCard from "@/components/Cart/GoalProgressCard/GoalProgressCard";
import ExpenseBreakdownCart from "@/components/Cart/ExpenseBreakdownCard/ExpenseBreakdownCart";
import LineDiagramIncExp from "@/components/Cart/LineDiagramIncExp/LineDiagramIncExp";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import {
  categoriesValue,
  filterOptionsTime,
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

const ReportsPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center justify-between py-[24px]">
                <h2 className="font-[Poppins] font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                  Reports / Analytics
                </h2>
                <ButtonPrimary textButton="Export" />
              </div>
              <div className="flex items-center gap-[20px] flex-wrap">
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={filterOptionsTime}
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
                <ExpenseBreakdownCart
                  categoriesData={categoriesData}
                  title="Top 5 Expenses"
                />
                <ChartsBarsCart />
                <LineDiagramIncExp
                  uData={dataExpense}
                  pData={dataIncome}
                  seriesData={seriesBalanse}
                  title="Monthly trend"
                />
                <ExpenseBreakdownCart
                  categoriesData={GoalProgress}
                  title="Completed vs Ongoing Goals"
                />
                <GoalProgressCard />
                <LineDiagramIncExp
                  uData={dataBudget}
                  pData={dataSpending}
                  seriesData={seriesBudgetSpending}
                  title="Budget vs Spending Over Time"
                />
                <ModalAddGoal />
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
