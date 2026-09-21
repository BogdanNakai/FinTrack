import {
  getCategoryLabel,
  listTransaction,
  moneyFormatter,
} from "@/context/AppContext";

const ItemTableRecent = () => {
  return (
    <>
      {listTransaction.map((e, i) =>
        i < 5 ? (
          <div key={i} className="flex justify-start items-start flex-grow-0 flex-shrink-0 relative py-2.5 bg-white hover:bg-[#F2F7FF] border-t-0 border-r-0 border-b-[0.4px] border-l-0 border-slate-500">
            <p className="flex-[0_0_36.84%] text-sm text-center text-slate-800">
              {e.description.slice(0, 20) + "..."}
            </p>
            <p className="flex-[0_0_23.68%] text-sm text-center text-slate-800">
              {getCategoryLabel(e.category)}
            </p>
            <p className="flex-[0_0_23.68%] text-sm text-center text-slate-800">
              {new Date(e.date).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="flex-[0_0_18.42%] text-sm text-center text-slate-800">
              {e.type === "expense" ? "-" : null}
              {moneyFormatter.format(e.amount)}
            </p>
          </div>
        ) : null
      )}
    </>
  );
};

export default ItemTableRecent;
