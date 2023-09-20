import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/data');
    const data = await response.json();

    setStatistics(data);
  };

  return (
    <DataContext.Provider value={{ statistics }}>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DataProvider;
