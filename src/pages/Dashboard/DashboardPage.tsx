import DashboardCard from "@/components/Card/DashboardCard/DashboardCard";
import DashboardCardRate from "@/components/Card/DashboardCard/DashboardCardRate";
import ExpenseBreakdownCard from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCard";
import LineDiagram from "@/components/Card/LineDiagram/LineDiagram";
import InputMonthe from "@/components/Form/InputMonthe";
import TabletRecentTransactions from "@/components/Tablets/TabletRecentTransactions";
import {
  categoriesData,
  dataExpense,
  dataIncome,
  herroBalans,
  seriesBalanse,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const DashboardPage = () => {
  return (
    <>
      <Header active="dashboard" />
      <main>
        <section className="py-[47px]">
          <div className="dashboard__container">
            <div>
              <div className="pb-[24px]">
                {herroBalans.map((e: any) => {
                  return (
                    <div className="flex items-center justify-center flex-wrap gap-2.5 md:gap-[24px]">
                      <DashboardCard
                        title="Total Balance"
                        balanse={e.totalBalans}
                        growth={+200}
                      />
                      <DashboardCard
                        title="Total Income"
                        balanse={e.totalIncome}
                        growth={-5000}
                      />
                      <DashboardCard
                        title="Total Expense"
                        balanse={e.totalExpense}
                        growth={-32434}
                      />
                      <DashboardCardRate
                        title="Total Rate"
                        balanse={(
                          (e.totalIncome - e.totalExpense) /
                          (e.totalIncome / 100)
                        ).toFixed(0)}
                        growth={12}
                      />{" "}
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-wrap gap-3 flex-wrap justify-between pb-6">
                <h2 className="font-[Poppins] font-sans text-[20px] md:text-2xl text-[#1E293B] tracking-[0.02em] font-medium ">
                  Spending Overview
                </h2>
                <div className="max-w-[150px]">
                  <InputMonthe title="This Month" />
                </div>
              </div>
              <div className="flex justify-center items-center max-[860px]:flex-wrap gap-2.5 xl:gap-16 pb-12">
                <div className="max-w-[520px] w-full">
                  <LineDiagram
                    uData={dataExpense}
                    pData={dataIncome}
                    seriesData={seriesBalanse}
                    title="Income vs Expense"
                  />
                </div>
                <div className="max-w-[520px] w-full">
                  <ExpenseBreakdownCard
                    categoriesData={categoriesData}
                    title="Expense Breakdown"
                    text="This month’s spending by category"
                  />
                </div>
              </div>
              <div>
                <TabletRecentTransactions />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Copyright />
    </>
  );
};

export default DashboardPage;
