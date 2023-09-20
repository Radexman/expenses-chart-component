import PropTypes from 'prop-types';
import BarChart from './BarChart';

const MainChart = ({ statistics }) => {
  return (
    <main className="rounded-xl bg-white p-6 shadow-xl">
      <BarChart statistics={statistics} />
    </main>
  );
};

MainChart.propTypes = {
  statistics: PropTypes.array.isRequired,
};

export default MainChart;
