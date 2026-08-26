import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ChartsBarsCard from "@/components/charts/ChartsBarsCard";
import ExpenseBreakdownCard from "@/components/charts/ExpenseBreakdownCard";
import LineDiagram from "@/components/charts/LineDiagram";
import SelectFilter from "@/components/selectFilter/SelectFilter";
import {
  categoriesValue,
  filterTimePeriod,
  categoriesData,
  seriesBalanse,
  dataIncome,
  dataExpense,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

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
                <ButtonPrimary type="button" textButton="Export" />
              </div>
              <div className="flex items-center gap-[15px] md:gap-[20px] max-[480px]:flex-wrap">
                <div className="min-[480px]:max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={filterTimePeriod}
                    NameSelect="Time Period"
                  />
                </div>
                <div className="min-[480px]:max-w-[220px] w-full">
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
