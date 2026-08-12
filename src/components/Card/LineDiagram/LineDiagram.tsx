import { lastFiveMonthe } from "@/context/AppContext";
import { LineChart } from "@mui/x-charts";

import type { ILineDiagram } from "./LineDiagram.type";

const LineDiagram: React.FC<ILineDiagram> = ({
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
    <div className="bg-white rounded-2xl p-3 lg:p-6 font-sans shadow-[0_4px_20px_rgba(0,0,0,0.05)] w-full max-w-[520px] w-full min-w-auto md:min-w-[340px] min-h-auto md:min-h-[300px] lg:min-h-[330px]">
      <div className="flex items-center gap-1.5 justify-between pb-[12px]">
        <h3 className="text-[14px] md:text-[18px] text-[#1E293B] font-bold">
          {title}
        </h3>
        <p className="text-[10px] md:text-[12px] text-[#64748B] ">
          Monthly trend
        </p>
      </div>
      <div className="h-50 md:h-58 ld:h-64">
        <LineChart
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
    </div>
  );
};

export default LineDiagram;
