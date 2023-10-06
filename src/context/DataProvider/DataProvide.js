import React, { createContext, useState } from "react";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [categorySetupData, setCategorySetupData] = useState([]);
  const dataInfo = {
    categorySetupData,
    setCategorySetupData,
  };
  return (
    <DataContext.Provider value={dataInfo}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
