import ButtonPrimary from "@/components/Buttons/ButtonPrimary";
import ItemList from "@/components/ItemList/ItemList";
import SelectFilter from "@/components/SelectFilter/SelectFilter";
import Header from "@/layouts/Header";


const Transactions = () => {
  return (
    <>
      <Header />
      <section className="pt-12 flex items-center justify-center relative min-h-full">
        <div className="herro-container">
          <div className="flex flex-wrap gap-3 justify-between pb-6">
            <h2 className="text-[#1E293B] text-2xl font-medium">
              Transactions
            </h2>
            <ButtonPrimary textButton={"Add Transaction"} />
          </div>
          <div className="flex flex-wrap gap-5 pb-6">
            <SelectFilter
              options={[
                { value: "day", label: "This day" },
                { value: "week", label: "This week" },
                { value: "month", label: "This month" },
              ]}
              titlePlaceholder="This Month"
            />
            <SelectFilter
              options={[
                { value: "income", label: "Income" },
                { value: "expense", label: "Expense" },
              ]}
              titlePlaceholder="All Types"
            />
            <SelectFilter
              options={[
                { value: "first", label: "New ones first" },
                { value: "old", label: "First the old ones" },
              ]}
              titlePlaceholder="Newest First"
            />
          </div>
          <div>
            <ul>
              <li className="grid grid-cols-6 text-[#64748B] text-[18px] border-b-1 border-b-[#e2e8f0] bg-[#E2E8F0] pt-4 pb-4 laptop:pr-19 laptop:pl-19 pl-5 pr-5">
                <span>Date</span>
                <span>Category</span>
                <span>Description</span>
                <span>Amount</span>
                <span>Type </span>
                <span>Actions</span>
              </li>
              <ItemList />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Transactions;
