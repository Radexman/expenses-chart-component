import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import data from '../chart-data.json';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    setStatistics(data);
  }, []);

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
