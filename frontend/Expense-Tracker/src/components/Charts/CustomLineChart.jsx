import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";

const CustomLineChart = ({ data }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-[#1f1f21] shadow-md rounded-lg p-2 border border-gray-300 dark:border-gray-700">
          <p className="text-xs font-semibold text-purple-800 dark:text-purple-300 mb-1">
            {payload[0].payload.category}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            Amount:{" "}
            <span className="text-sm font-medium text-gray-900 dark:text-white">
              {payload[0].payload.amount}
            </span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-[#131314] rounded-2xl p-4 shadow-md shadow-gray-200/50 dark:shadow-black/20 border border-gray-200/50 dark:border-gray-700/50">
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            {/* Light Mode Gradient */}
            <linearGradient id="expenseGradientLight" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#875cf5" stopOpacity={0.35} />
              <stop offset="95%" stopColor="#875cf5" stopOpacity={0} />
            </linearGradient>

            {/* Dark Mode Gradient */}
            <linearGradient id="expenseGradientDark" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#b79cff" stopOpacity={0.25} />
              <stop offset="95%" stopColor="#b79cff" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#e5e7eb"
            opacity={0.25}
            className="dark:stroke-gray-700"
          />

          <XAxis
            dataKey="month"
            tick={{ fontSize: 12, fill: "#555" }}
            stroke="none"
          />

          <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke="none" />

          <Tooltip content={CustomTooltip} />

          <Area
            type="monotone"
            dataKey="amount"
            stroke="#875cf5"
            strokeWidth={3}
            fill="url(#expenseGradientLight)"
            className="dark:fill-[url(#expenseGradientDark)]"
            dot={{ r: 3, fill: "#ab8df8", stroke: "#875cf5" }}
            activeDot={{ r: 5, fill: "#c3adff" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
