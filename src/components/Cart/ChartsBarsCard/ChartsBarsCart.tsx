import { totalСostsСategory } from "@/context/AppContext";
import { BarChart } from "@mui/x-charts";

const ChartsBarsCart = () => {

  const value = totalСostsСategory.map((i) => i.value);
  const maxValue = value.length > 0 ? Math.max(...value) : 0;


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
        hideLegend
        xAxis={[
          {
            scaleType: "band",
            data: totalСostsСategory.map((d) => d.label),
            disableTicks: true,
            colorMap: {
              type: "ordinal",
              values: totalСostsСategory.map((d) => d.label),
              colors: totalСostsСategory.map((d) => d.color),
            },
          },
        ]}
        series={[
          {
            data: totalСostsСategory.map((d) => d.value),
          },
        ]}
        yAxis={[
          {
            min: 0,
            max: maxValue * 1.3,
            width: 50,
            tickNumber: 10,
            tickLabelInterval: (value, index) => index % 2 === 0,
            disableTicks: true,
            disableLine: true,
            valueFormatter: (value: number) =>
              new Intl.NumberFormat("de-DE").format(value),
          },
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
      />
    </div>
  );
};

export default ChartsBarsCart;
