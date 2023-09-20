import { useState, useEffect } from 'react';
import Header from './components/Header';
import MainChart from './components/MainChart';
import chartData from './chart-data.json';

const App = () => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    setStatistics(chartData);
  }, []);

  return (
    <div className="main-wrapper">
      <div className="mx-auto max-w-3xl flex-1 space-y-4">
        <Header />
        <MainChart statistics={statistics} />
      </div>
    </div>
  );
};

export default App;
