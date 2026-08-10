import ButtonPrimaryAtion from "@/components/Buttons/ButtonPrimaryAtion";
import BudgetCard from "@/components/Card/BudgetCart/BudgetCard";
import ExpenseBreakdownCard from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCard";
import GoalProgressCard from "@/components/Card/GoalProgressCard/GoalProgressCard";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import {
  GoalProgress,
  categoriesValue,
  statusGoal,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const BudgetPage = () => {
  return (
    <>
      <Header />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center justify-between py-[24px]">
                <div>
                  <h2 className="font-[Poppins] font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium pb-[10px]">
                    Budget Planner
                  </h2>
                  <p className="text-[#64748B] text-[14px]">
                    Plan and monitor your monthly limits
                  </p>
                </div>
                <ButtonPrimaryAtion textButton="Add New Budget" />
              </div>
              <div className="flex items-center gap-[20px] flex-wrap">
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={statusGoal}
                    NameSelect="Status"
                  />
                </div>
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={categoriesValue}
                    NameSelect="All Categories"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[24px] flex-wrap lg:flex-nowrap justify-start pb-[24px]">
                <BudgetCard />
              </div>
              <div className="">
                <h2 className="text-[20px] text-[#1E293B] font-semibold">
                  Goal Progress Overview
                </h2>
                <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 lg:justify-items-normal justify-items-center">
                  <GoalProgressCard />
                  <ExpenseBreakdownCard
                    categoriesData={GoalProgress}
                    title="Completed vs Ongoing Goals"
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
