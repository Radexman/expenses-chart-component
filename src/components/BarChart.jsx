import { useState, useEffect, useContext } from 'react';
import SingleBar from './SingleBar';
import { DataContext } from '../context/DataContext';

const BarChart = () => {
  const [today, setToday] = useState();

  const { statistics } = useContext(DataContext);

  useEffect(() => {
    setCurrentDate();
  }, []);

  const setCurrentDate = () => {
    const today = new Date().getDay();
    setToday(today);
  };

  if (!statistics && statistics.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold text-neutral-darkBrown">Sorry!</h2>
        <h3 className="text-xl font-bold text-neutral-darkBrown">
          No data to display
        </h3>
      </div>
    );
  }

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
