import BarChart from './BarChart';
import StatsSummary from './StatsSummary';

const MainChart = () => {
  return (
    <main className="rounded-xl bg-white p-6 shadow-xl">
      <BarChart />
      <StatsSummary />
    </main>
  );
};

export default MainChart;
