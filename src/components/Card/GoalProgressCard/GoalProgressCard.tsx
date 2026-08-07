import { listGoal } from "@/context/AppContext";
import { BarChart } from "@mui/x-charts";

const GoalProgressCard = () => {
  return (
    <div className="bg-white rounded-2xl md:p-6 p-3 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[520px] w-full h-auto">
      <div className="flex items-center gap-1.5 justify-between pb-[12px]">
        <h3 className="text-[18px] text-[#1E293B] font-bold">
          Spending by Category
        </h3>
      </div>
      <BarChart
        height={215}
        grid={{ vertical: false, horizontal: true }}
        dataset={listGoal}
        xAxis={[
          {
            dataKey: "label",
            categoryGapRatio: 0.6,
            barGapRatio: 0.4,
          },
        ]}
        series={[
          { dataKey: "saved", label: "Saved Amount", color: "#00B894" },
          { dataKey: "target", label: "Remaining Amount", color: "#E2E8F0" },
        ]}
        margin={{
          left: 0,
          right: 10,
          top: 0,
          bottom: 0,
        }}
        sx={{
          width: "100%",
          maxWidth: "520px",
          "& .MuiChartsGrid-line": {
            stroke: "#CCCCCC",
            strokeWidth: 0.78,
          },
          "& .MuiChartsGrid-line:nth-child(even)": {
            stroke: "#EBEBEB",
            strokeWidth: 0.78,
          },
        }}
        slotProps={{
          legend: {
            position: { vertical: "top", horizontal: "end" },
          },
        }}
        yAxis={[
          {
            width: 50,
            tickNumber: 10,
            tickLabelInterval: (value, index) => index % 2 === 0,
            disableTicks: true,
            disableLine: true,
          },
        ]}
      />
    </div>
  );
};

export default GoalProgressCard;
