import food from "@/assets/icon_food.svg"
import transport from "@/assets/icon_transport.svg"
import entertainment from "@/assets/icon_entertainment.svg"
import bills from "@/assets/icon_bills.svg"
import shopping from "@/assets/icon_shoping.svg"
import health from "@/assets/icon_health.svg"
import education from "@/assets/icon_education.svg"
import others from "@/assets/icon_others.svg"
import investment from "@/assets/icon_investment.svg"
import freelance from "@/assets/icon_freelance.svg"
import salary from "@/assets/icon_salary.svg"
import savings from "@/assets/icon_savings.svg"
import type { ITablet } from "./Tablet.type"

const ElementTitleCategory = ({ category }: ITablet) => {
  const image =
    category === "Food & Dining"
      ? food
      : category === "Transport"
      ? transport
      : category === "Entertainment"
      ? entertainment
      : category === "Bills & Utilities"
      ? bills
      : category === "Shopping"
      ? shopping
      : category === "Health & Fitness"
      ? health
      : category === "Education"
      ? education
      : category === "Others"
      ? others
      : category === "Investment"
      ? investment
      : category === "Freelance"
      ? freelance
      : category === "Salary"
      ? salary
      : category === "Savings Account"
      ? savings
      : "None";

  return (
    <>
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center rounded-[50%] w-[28px] h-[28px]  border-1 border-[#143a6c16]">
          <img src={image} alt="Image" />
        </div>
        {category}
      </div>
    </>
  );
};

export default ElementTitleCategory