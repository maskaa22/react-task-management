import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import c from "./Chart.module.css";

const Chart = () => {
  const data = [
    { name: "S", value: 2 },
    { name: "M", value: 1 },
    { name: "T", value: 3 },
    { name: "W", value: 2 },
    { name: "T", value: 3 },
    { name: "F", value: 4 },
    { name: "S", value: 2 },
  ].map((d) => ({
    ...d,
    shadowValue: d.value - 0.3, // зсув вниз
  }));

  const values = data.map((d) => d.value);
  const max = Math.max(...values);
  const min = Math.min(...values);

  const ticks = [];
  for (let i = min; i <= max; i++) {
    ticks.push(i);
  }

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const value = payload[0].value;
      return (
        <div className={c.tooltip}>
          {value} Task{value !== 1 ? "s" : ""}
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={200} className={c.chart}>
      <LineChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 0, left: 8 }}
      >
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          padding={{ left: 8 }}
          tick={{ fontSize: 12, fill: "#141522", fontWeight: 500 }}
        />

        <YAxis
          domain={[min, max]}
          ticks={ticks}
          axisLine={false}
          tickLine={false}
          width={24}
          padding={{ bottom: 8 }}
          tick={{ fontSize: 12, fill: "#141522", fontWeight: 500 }}
        />
        <Line
          type="monotone"
          dataKey="shadowValue"
          stroke="#EBEDF7"
          strokeWidth={3}
          dot={false}
          activeDot={false}
          connectNulls
        />

        <Line
          type="monotone"
          dataKey="value"
          stroke="#000"
          strokeWidth={3}
          dot={{
            r: 7,
            stroke: "#4A6CF7",
            strokeWidth: 3,
            fill: "#fff",
          }}
          activeDot={false}
        />

        <Tooltip content={<CustomTooltip />} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
