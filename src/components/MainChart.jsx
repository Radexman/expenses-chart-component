import PropTypes from 'prop-types';
import BarChart from './BarChart';
import StatsSummary from './StatsSummary';

const MainChart = ({ statistics }) => {
  return (
    <main className="rounded-xl bg-white p-6 shadow-xl">
      <BarChart statistics={statistics} />
      <StatsSummary />
    </main>
  );
};

MainChart.propTypes = {
  statistics: PropTypes.array.isRequired,
};

export default MainChart;
