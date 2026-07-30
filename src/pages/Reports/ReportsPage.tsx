import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ExpenseBreakdownCart from "@/components/Cart/ExpenseBreakdownCart/ExpenseBreakdownCart";
import LineDiagramIncExp from "@/components/Cart/LineDiagramIncExp/LineDiagramIncExp";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import { categoriesValue, filterOptionsTime } from "@/context/AppContext";
import Copyright from "@/layouts/Copyright";
import Header from "@/layouts/Header";

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
              <div className="flex items-start flex-wrap gap-5 justify-center">
                <ExpenseBreakdownCart />
                <LineDiagramIncExp />
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
