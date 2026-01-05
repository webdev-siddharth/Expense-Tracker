import React, { useEffect, useState } from "react";
import { prepareExpenseBarChartData } from "../../utils/helper";
import CustomBarChart from "../Charts/CustomBarChart";

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseBarChartData(data);
    setChartData(result);

    return () => {};
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg text-gray-900 dark:text-gray-100">
          Last 30 Days Expenses
        </h5>
      </div>

      <div className="mt-6">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default Last30DaysExpenses;
