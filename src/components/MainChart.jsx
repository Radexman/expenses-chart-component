import BarChart from "./BarChart";

const MainChart = ({ statistics }) => {
  return (
    <main className="rounded-xl bg-white p-6 shadow-xl">
      <BarChart statistics={statistics} />
    </main>
  );
};

export default MainChart;
