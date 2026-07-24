import ButtonActions from "./Buttons/ButtonActions";

const ItemList = () => {
  return (
    <li className="grid grid-cols-6 items-center text-[#1E293B] text-[18px] border-b-1 border-b-[#e2e8f0] pt-5 pb-5 laptop:pr-19 laptop:pl-19 pl-5 pr-5">
      <span>15 Oct 2025</span>
      <span className="flex">
        {/* <img src="" alt="Image" /> */}
        Food & Dining
      </span>
      <span>Description</span>
      <span>Amount</span>
      <span>
        <span className="flex items-center justify-center w-25 h-7 rounded-4xl bg-[#fdecec] text-[#c72525]">
          Expense
        </span>
      {/*   <span className="flex items-center justify-center w-25 h-7 rounded-4xl bg-[#e6f9ec] text-[#0b8a36]">
          Income
        </span> */}
      </span>
      <span>
        <ButtonActions />
      </span>
    </li>
  );
};

export default ItemList;
