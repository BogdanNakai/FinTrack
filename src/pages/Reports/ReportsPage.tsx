import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import ChartsBarsCard from "@/components/charts/ChartsBarsCard";
import ExpenseBreakdownCard from "@/components/charts/ExpenseBreakdownCard";
import LineDiagram from "@/components/charts/LineDiagram";
import FilterSelect from "@/components/form/FilterSelect";
import {
  categoriesValue,
  filterTimePeriod,
  categoriesData,
  balanceSeries,
  dataIncome,
  dataExpense,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";
import { useState } from "react";

const ReportsPage = () => {
  const [timePeriod, setTimePeriod] = useState("");
  const [category, setCategory] = useState("");

  return (
    <>
      <Header active="reports" />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center flex-wrap gap-2.5 justify-between py-[24px]">
                <h2 className="font-[Poppins] text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                  Reports / Analytics
                </h2>
                <ButtonPrimary type="button" textButton="Export" />
              </div>
              <div className="flex items-center gap-[15px] md:gap-[20px] max-[480px]:flex-wrap">
                <div className="min-[480px]:max-w-[220px] w-full">
                  <FilterSelect
                    options={filterTimePeriod}
                    label="Time Period"
                    value={timePeriod}
                    onChange={setTimePeriod}
                  />
                </div>
                <div className="min-[480px]:max-w-[220px] w-full">
                  <FilterSelect
                    options={categoriesValue}
                    label="All Categories"
                    value={category}
                    onChange={setCategory}
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
                  seriesData={balanceSeries}
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
