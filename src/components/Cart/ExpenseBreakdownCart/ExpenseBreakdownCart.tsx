import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  type ChartOptions,
  type Plugin,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { categoriesData } from "@/context/AppContext";

ChartJS.register(ArcElement, Tooltip);

// Плагін для малювання 3D-грані ТІЛЬКИ знизу під діаграмою
const bottomDepthPlugin: Plugin<"pie"> = {
  id: "bottomDepthPlugin",
  beforeDatasetDraw(chart) {
    const { ctx } = chart;
    const meta = chart.getDatasetMeta(0);
    const depth = 26; // Товщина бічної грані

    ctx.save();

    // Малюємо шар за шаром зсув по Y для створення товщини
    for (let i = depth; i > 0; i--) {
      meta.data.forEach((element: any, index: number) => {
        const { startAngle, endAngle, outerRadius, innerRadius, x, y } =
          element;
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
    meta.data.forEach((element: any, index: number) => {
      const { startAngle, endAngle, outerRadius, x, y } = element;
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

const options: ChartOptions<"pie"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false, // Ховаємо стандартну легенду Chart.js, щоб вивести кастомну праворуч
    },
    tooltip: {
      enabled: true,
    },
  },
};

export const ExpenseBreakdownCart: React.FC = () => {
  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "16px",
        padding: "24px",
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
        maxWidth: "520px",
        height: "333px",
      }}
    >
      {/* Заголовок */}
      <h2
        style={{
          margin: 0,
          fontSize: "20px",
          fontWeight: "700",
          color: "#1e293b",
        }}
      >
        Top 5 Expenses
      </h2>

      {/* Основний блок: Діаграма + Легенда */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* Контейнер діаграми із CSS-нахилом */}
        <div
          style={{
            width: "240px",
            height: "290px",
            transform: "scaleY(0.75)", // Сплющує коло по вертикалі, створюючи потрібний кут огляду
            transformOrigin: "start center",
          }}
        >
          <Pie data={data} options={options} plugins={[bottomDepthPlugin]} />
        </div>

        {/* Кастомна легенда праворуч */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minWidth: "140px",
          }}
        >
          {categoriesData.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  backgroundColor: item.color,
                  display: "inline-block",
                }}
              />
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  color: "#334155",
                }}
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseBreakdownCart;
