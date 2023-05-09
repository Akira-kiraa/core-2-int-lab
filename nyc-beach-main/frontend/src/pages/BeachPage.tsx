import Chart from "chart.js/auto";
import { color } from "chart.js/helpers";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data.json";
import { useEffect, useRef } from "react";
import { getEntries } from "../utils/getEntries";
import { fitV } from "../utils/design";
import DropDown from "../DropDown";

Chart.defaults.font.size = (28 / 832) * window.innerHeight;
Chart.defaults.font.family = "Inter";
Chart.defaults.color = "black";

const getBubbleRadius = () => (40 / 832) * window.innerHeight;

const bubbleAlpha = 0.6;

const cutoff1 = 100;
const cutoff2 = 1000;

const decimalYearToYearAndMonth: (decimalYear: number) => {
  year: number;
  month: number;
} = (decimalYear) => {
  const year = Math.floor(decimalYear);
  const month = Math.round((decimalYear - year) * 12) + 1;
  return { year, month };
};

export default function BeachPage() {
  const { beachName } = useParams();
  const navigate = useNavigate();

  let name: keyof typeof data =
    beachName && beachName in data
      ? (beachName as keyof typeof data)
      : "AMERICAN TURNERS";
  if (beachName !== name)
    console.error("beach name", beachName, "not found, defaulting to", name);
  const monthlySummaries = data[name];

  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!chartRef.current) return;
    const chartTotalData = getEntries(monthlySummaries).map(
      ([monthKey, average]) => {
        let [year, month] = monthKey.split("-").map(Number);
        if (isNaN(year)) {
          console.error("invalid year from mo key=", monthKey);
          year = 2022;
        }
        if (isNaN(month)) {
          console.error("invalid month from mo key=", monthKey);
          month = 1;
        }
        const decimalYear = year + (month - 1) / 12;
        return {
          x: decimalYear,
          y: average,
          r: getBubbleRadius(),
        };
      }
    );
    const chart = new Chart(chartRef.current, {
      type: "bubble",
      options: {
        responsive: true,
        maintainAspectRatio: false,
        onResize: (chart, { height }) => {
          console.log('onResize', height);
          chart.data.datasets.forEach(dataset => {
            dataset.data.forEach(entry => {
              if (!entry) return;
              //@ts-ignore
              entry.r = getBubbleRadius();
            })
          })
          // chart.up
          // chart.options.font ??= {};
          // chart.options.font.size = (28 / 750) * height;
        },
        aspectRatio: window.innerWidth / window.innerHeight,
        plugins: {
          tooltip: {
            callbacks: {
              label: (context) => {
                const { x: decimalYear, y: result } =
                  context.dataset.data[context.dataIndex];
                const { year, month } = decimalYearToYearAndMonth(decimalYear);
                return `${year}-${month}: ${result.toFixed(2)}`;
              },
            },
          },
        },
        font: {
          family: "Inter",
          style: "normal",
        },
        color: "black",

        scales: {
          y: {
            title: {
              display: true,
              text: "Average Enterococci Result",
            },
          },
          x: {
            title: {
              display: true,
              text: "Month",
            },
            ticks: {
              callback(tickValue) {
                const { year, month } = decimalYearToYearAndMonth(
                  Number(tickValue)
                );
                return `${year}-${month}`;
              },
            },
          },
        },
      },
      data: {
        datasets: [
          {
            label: `<= ${cutoff1}`,
            backgroundColor: color("#82ED7F").alpha(bubbleAlpha).rgbString(),
            data: chartTotalData.filter((point) => point.y <= cutoff1),
          },
          {
            label: `<= ${cutoff1}`,
            backgroundColor: color("#FAE957").alpha(bubbleAlpha).rgbString(),
            data: chartTotalData.filter(
              (point) => point.y > cutoff1 && point.y <= cutoff2
            ),
          },
          {
            label: `> ${cutoff2}`,
            backgroundColor: color("#F12C2C").alpha(bubbleAlpha).rgbString(),
            data: chartTotalData.filter((point) => point.y > cutoff2),
          },
        ],
      },
    });
    return () => chart.destroy();
  }, []);
  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <DropDown />
      <div
        className="bg-major text-white flex items-center justify-center text-center font-common select-none cursor-pointer"
        style={{
          padding: fitV(16),
          fontSize: fitV(24),
          marginBottom: fitV(16),
        }}
        onClick={() => navigate(-1)}
      >
        {beachName}
      </div>
      <div className="relative w-[80vw] h-[80vh]">
        <canvas id="bubble" ref={chartRef}></canvas>
      </div>
    </div>
  );
}
