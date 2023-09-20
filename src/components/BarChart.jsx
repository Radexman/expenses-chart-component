import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
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

BarChart.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      dayName: PropTypes.string.isRequired,
      day: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
  ),
};

export default BarChart;
