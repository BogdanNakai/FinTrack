import ButtonPrimaryActions from "@/components/buttons/ButtonPrimaryActions";
import ExpenseBreakdownCard from "@/components/charts/ExpenseBreakdownCard";
import {
  goalProgress,
  filterTimePeriod,
  statusGoal,
} from "@/context/AppContext";
import { ModalContext } from "@/context/ModalContext";
import GoalCard from "@/features/goals/components/GoalCard";
import GoalProgressCard from "@/features/goals/components/GoalProgressCard";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";
import ModalAddGoal from "@/components/modal/ModalAddGoal";
import { useContext, useState } from "react";
import FilterSelect from "@/components/form/FilterSelect";

const GoalsPage = () => {
  const { openModalTransactions } = useContext(ModalContext);
  const [timePeriod, setTimePeriod] = useState("");
  const [goalStatus, setGoalStatus] = useState("");

  return (
    <>
      <Header active="goals" />
      <main>
        <section className="py-[47px]">
          <div className="reports__container">
            <div className="grid gap-[12px]">
              <div className="flex items-center flex-wrap justify-between gap-2.5 py-[24px]">
                <div>
                  <h2 className="font-sans text-2xl text-[#1E293B] tracking-[0.02em] font-medium pb-[10px]">
                    Financial Goals
                  </h2>
                  <p className="text-[#64748B] text-[14px]">
                    Set, track, and achieve your financial targets
                  </p>
                </div>
                <ButtonPrimaryActions textButton="Add Goal" type="button" />
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
                    options={statusGoal}
                    label="Status"
                    value={goalStatus}
                    onChange={setGoalStatus}
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
                    categoriesData={goalProgress}
                    title="Completed vs Ongoing Goals"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {openModalTransactions && <ModalAddGoal />}
      <Copyright />
    </>
  );
};

export default GoalsPage;
