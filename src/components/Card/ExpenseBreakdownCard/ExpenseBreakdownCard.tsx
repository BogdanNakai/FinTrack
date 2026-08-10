import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  type ChartOptions,
  type Plugin,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import type { MyComponentProps } from "./ExpenseBreakdownCard.type";

ChartJS.register(ArcElement, Tooltip);

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const ExpenseBreakdownCard: React.FC<MyComponentProps> = ({
  categoriesData,
  title,
}) => {
  
  const bottomDepthPlugin: Plugin<"pie"> = {
    id: "bottomDepthPlugin",
    beforeDatasetDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);
      const depth = 26; // Товщина бічної грані

      ctx.save();

      // Малюємо шар за шаром зсув по Y для створення товщини
      for (let i = depth; i > 0; i--) {
        meta.data.forEach((element, index) => {
          const arc = element as ArcElement;

          const { startAngle, endAngle, outerRadius, innerRadius, x, y } = arc;
          const category = categoriesData[index];

          // Малюємо грань тільки якщо сектор знаходиться в нижній півсфері (кути від ~0° до ~180°)
          const midAngle = startAngle + (endAngle - startAngle) / 2;
          const isBottomSector = Math.sin(midAngle) > -0.2;

          if (isBottomSector) {
            ctx.beginPath();
            ctx.arc(x, y + i, outerRadius, startAngle, endAngle);
            if (innerRadius > 0) {
              ctx.arc(x, y + i, innerRadius, endAngle, startAngle, true);
            }
            ctx.closePath();

            ctx.fillStyle = category.darkColor;
            ctx.fill();
          }
        });
      }

      ctx.restore();
    },
    afterDatasetDraw(chart) {
      const { ctx } = chart;
      const meta = chart.getDatasetMeta(0);

      // Малюємо білі відсотки поверх секторів
      meta.data.forEach((element, index) => {
        const arc = element as ArcElement;
        const { startAngle, endAngle, outerRadius, x, y } = arc;
        const val = categoriesData[index].value;

        const midAngle = startAngle + (endAngle - startAngle) / 2;
        const textRadius = outerRadius * 0.65;
        const textX = x + Math.cos(midAngle) * textRadius;
        const textY = y + Math.sin(midAngle) * textRadius;

        ctx.save();
        ctx.fillStyle = "#ffffff";
        ctx.font = "600 14px system-ui, -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        // Компенсуємо нахил контейнера, щоб текст не виглядав сплюснутим
        ctx.translate(textX, textY);
        ctx.scale(1, 1.4);
        ctx.fillText(`${val}%`, 0, 0);
        ctx.restore();
      });
    },
  };

  const data = {
    labels: categoriesData.map((item) => item.label),
    datasets: [
      {
        data: categoriesData.map((item) => item.value),
        backgroundColor: categoriesData.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="bg-white rounded-2xl md:p-6 p-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)] max-w-[520px] w-full min-h-[333px]">
      <div className="flex items-center gap-1.5 justify-between pb-[12px]">
        <h3 className="text-[18px] text-[#1E293B] font-bold">{title}</h3>
      </div>
      <div className="flex items-center justify-between gap-5 flex-wrap">
        <div
          className="w-[240px] h-[290px] origin-left"
          style={{ transform: "scaleY(0.75)" }}
        >
          <Pie data={data} options={options} plugins={[bottomDepthPlugin]} />
        </div>
        <div className="flex min-w-[140px] flex-col gap-2.5">
          {categoriesData.map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-slate-700">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseBreakdownCard;
