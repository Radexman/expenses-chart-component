import Header from './components/Header';
import MainChart from './components/MainChart';
import DataProvider from './context/DataContext';

const App = () => {
  return (
    <DataProvider>
      <div className="main-wrapper">
        <div className="mx-auto max-w-3xl flex-1 space-y-4">
          <Header />
          <MainChart />
        </div>
      </div>
    </DataProvider>
  );
};

export default App;
