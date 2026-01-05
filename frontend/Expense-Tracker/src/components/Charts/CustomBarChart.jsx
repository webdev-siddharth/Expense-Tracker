import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts";

const CustomBarChart = ({ data }) => {
  // Function to alternative colors
  const getBarColor = (index) => {
    return index % 2 === 0 ? "#875cf5" : "#b79cf9";
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#1f1f21] shadow-md rounded-lg p-2 border border-gray-300 dark:border-gray-700">
          <p className="text-xs font-semibold text-purple-800 dark:text-purple-300 mb-1">
            {payload[0].payload.month || payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Amount:{" "}
            <span className="font-medium text-gray-900 dark:text-gray-100">
              ₹{payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-[#131314] rounded-2xl p-4 shadow-md shadow-gray-200/50 dark:shadow-black/20 mt-6 border border-gray-200/50 dark:border-gray-700/50">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid stroke="none" />

          {/* <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            opacity={0.3}
          /> */}

          <XAxis
            dataKey="category"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={CustomTooltip} />

          <Bar
            dataKey="amount"
            fill="#FF8042"
            radius={[10, 10, 0, 0]}
            activeDot={{ r: 8, fill: "yellow" }}
            activeStyle={{ fill: "green" }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={getBarColor(index)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
