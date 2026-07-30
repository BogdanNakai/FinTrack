import { lastFiveMonthe } from "@/context/AppContext";
import { LineChart } from "@mui/x-charts";
import { width } from "highcharts";

const LineDiagramIncExp = () => {
  const pData = [2, 500, 233, 34.26, 200, 230];
  const uData = [3, 34.24, 111, 5.34, 142.0, 100];

  const xLabels = lastFiveMonthe();
  return (
    <div
      className="bg-white rounded-2xl p-6 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[520px] w-full h-auto
"
    >
      <div className="flex items-center gap-1.5 justify-between pb-[12px]">
        <h3 className="text-[18px] text-[#1E293B] font-bold">
          Income vs Expense
        </h3>
        <p className="text-[12] text-[#64748B] ">Monthly trend</p>
      </div>
      <LineChart
        series={[
          { data: pData, label: "Expense", color: "#EF4444" },
          { data: uData, label: "Income", color: "#00B894" },
        ]}
        xAxis={[
          {
            scaleType: "point",
            data: xLabels,
            height: 28,
            disableTicks: true,
          },
        ]}
        yAxis={[
          {
            // Просимо MUI намалювати більше ліній (наприклад, 10 замість стандартних 5)
            tickNumber: 10,
            width: 50,
            tickLabelInterval: (value, index) => index % 2 === 0,
            disableTicks: true,
            disableLine: true,
          },
        ]}
        margin={{
          left: 0, // Мінімальний відступ зліва, щоб лише помістилися цифри осі Y
          right: 10, // Зменшуємо правий відступ майже до нуля — це розтягне графік ліворуч
          top: 0,
          bottom: 0,
        }}
        width={423}
        height={215}
        grid={{ vertical: false, horizontal: true }}
        sx={{
          // Загальний стиль для всіх ліній
          "& .MuiChartsGrid-line": {
            stroke: "#CCCCCC",
            strokeWidth: 0.78,
          },
          // Робимо кожну другу (проміжну) лінію ще прозорішою або пунктирною
          "& .MuiChartsGrid-line:nth-child(even)": {
            stroke: "#EBEBEB",
            strokeWidth: 0.78,
          },
        }}
        slotProps={{
          legend: {
            position: { vertical: "bottom", horizontal: "center" },
          },
        }}
      />
    </div>
  );
};

export default LineDiagramIncExp;
