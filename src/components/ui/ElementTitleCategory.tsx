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
import type { IIconCategory } from "./Ui.type"
import { getCategoryLabel } from "@/context/AppContext"


const ElementTitleCategory = ({ category }: IIconCategory) => {
  const image =
    category === "food-dining"
      ? food
      : category === "transport"
      ? transport
      : category === "entertainment"
      ? entertainment
      : category === "bills-utilities"
      ? bills
      : category === "shopping"
      ? shopping
      : category === "health-fitness"
      ? health
      : category === "education"
      ? education
      : category === "others"
      ? others
      : category === "investment"
      ? investment
      : category === "freelance"
      ? freelance
      : category === "salary"
      ? salary
      : category === "savings-account"
      ? savings
      : others;

  return (
    <>
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center rounded-[50%] w-[28px] h-[28px]  border-1 border-[#143a6c16]">
          <img src={image} alt="" />
        </div>
        {getCategoryLabel(category)}
      </div>
    </>
  );
};

export default ElementTitleCategory
