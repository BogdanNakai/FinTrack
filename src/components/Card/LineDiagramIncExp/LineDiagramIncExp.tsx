import { lastFiveMonthe } from "@/context/AppContext";
import { LineChart } from "@mui/x-charts";
import type { LineDiagramIncExpProps } from "./LineDiagramIncExp.type";

const LineDiagramIncExp: React.FC<LineDiagramIncExpProps> = ({
  pData,
  uData,
  seriesData,
  title,
}) => {
  const numbersOnlyP = pData.filter((i): i is number => i !== null);
  const numbersOnlyU = uData.filter((i): i is number => i !== null);

  const maxNumberP = numbersOnlyP.length > 0 ? Math.max(...numbersOnlyP) : 0;
  const maxNumberU = numbersOnlyU.length > 0 ? Math.max(...numbersOnlyU) : 0;

  const maxNumber = Math.max(maxNumberP, maxNumberU);
  const xLabels = lastFiveMonthe();

  return (
    <div className="bg-white rounded-2xl md:p-6 p-3 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[520px] w-full h-auto">
      <div className="flex items-center gap-1.5 justify-between pb-[12px]">
        <h3 className="text-[18px] text-[#1E293B] font-bold">{title}</h3>
        <p className="text-[12] text-[#64748B] ">Monthly trend</p>
      </div>
      <LineChart
        height={215}
        grid={{ vertical: false, horizontal: true }}
        series={seriesData}
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
            min: 0,
            max: maxNumber * 1.2,
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
