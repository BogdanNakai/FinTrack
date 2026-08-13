import ButtonPrimaryActions from "@/components/Buttons/ButtonPrimaryAtions";
import ExpenseBreakdownCard from "@/components/Card/ExpenseBreakdownCard/ExpenseBreakdownCard";
import GoalCard from "@/components/Card/GoalCard/GoalCard";
import GoalProgressCard from "@/components/Card/GoalProgressCard/GoalProgressCard";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import {
  GoalProgress,
  filterTimePeriod,
  statusGoal,
} from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

const GoalsPage = () => {
  return (
    <>
      <Header active="goals" />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center flex-wrap justify-between gap-2.5 py-[24px]">
                <div>
                  <h2 className="font-[Poppins] font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium pb-[10px]">
                    Budget Planner
                  </h2>
                  <p className="text-[#64748B] text-[14px]">
                    Set, track, and achieve your financial targets
                  </p>
                </div>
                <ButtonPrimaryActions textButton="Add Goal" />
              </div>
              <div className="flex items-center gap-[20px] flex-wrap max-[768px]:justify-center">
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={filterTimePeriod}
                    NameSelect="Time Period"
                  />
                </div>
                <div className="max-w-[220px] w-full">
                  <SelectFilter
                    SelectOptionsList={statusGoal}
                    NameSelect="Status"
                  />
                </div>
              </div>
              <div className="flex items-center gap-[24px] max-[680px]:flex-wrap flex-nowrap justify-center pb-[24px]">
                <GoalCard />
              </div>
              <div className="">
                <h2 className="text-[20px] text-[#1E293B] font-semibold pb-[12px]">
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

export default GoalsPage;
