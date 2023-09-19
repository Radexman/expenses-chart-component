import { useState } from "react";

const BarChart = ({ statistics }) => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
      <div className="flex items-end justify-evenly">
        {statistics.map((stat, index) => {
          const { day, amount, height } = stat;
          return (
            <div key={index}>
              <div
                className="bg-primary-softRed tooltip w-8 cursor-pointer rounded-sm md:w-14"
                style={{ height: height }}
                data-tip={`$${amount}`}
              ></div>
              <p className="text-center">{day}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BarChart;
