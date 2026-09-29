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
import type { TCategory } from "@/types/category.type"

const categoryIcons: Record<TCategory, string> = {
  "Food & Dining": food,
  Transport: transport,
  Entertainment: entertainment,
  "Bills & Utilities": bills,
  Shopping: shopping,
  "Health & Fitness": health,
  Education: education,
  Others: others,
  Investment: investment,
  Freelance: freelance,
  Salary: salary,
  "Savings Account": savings,
};

const ElementTitleCategory = ({ category }: IIconCategory) => {
  const image = categoryIcons[category];

  return (
    <>
      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center rounded-[50%] w-[28px] h-[28px] border border-[#143a6c16]">
          <img src={image} alt="" />
        </div>
        {getCategoryLabel(category)}
      </div>
    </>
  );
};

export default ElementTitleCategory
