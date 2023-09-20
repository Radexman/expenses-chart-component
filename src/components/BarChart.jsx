import { useState, useEffect } from 'react';
import SingleBar from './SingleBar';

const BarChart = ({ statistics }) => {
  const [today, setToday] = useState();

  useEffect(() => {
    setCurrentDate();
  }, []);

  const setCurrentDate = () => {
    const today = new Date().getDay();
    setToday(today);
  };

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Spending - Last 7 days</h1>
      <div className="flex items-end justify-evenly">
        {statistics.map((stat) => (
          <SingleBar key={stat.day} stat={stat} today={today} />
        ))}
      </div>
    </div>
  );
};

export default BarChart;
