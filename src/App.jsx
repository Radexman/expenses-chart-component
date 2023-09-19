import { useState } from "react";
import Header from "./components/Header";
import MainChart from "./components/MainChart";
import chartData from "./chart-data.json";

const App = () => {
  const [statistics, setStatistics] = useState(chartData);

  return (
    <div className="bg-neutral-veryPaleOrange flex min-h-screen items-center justify-center">
      <div className="mx-auto max-w-3xl flex-1 space-y-4">
        <Header />
        <MainChart statistics={statistics} />
      </div>
    </div>
  );
};

export default App;
