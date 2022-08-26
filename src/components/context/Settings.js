import React, { createContext, useContext, useState } from "react";

const SettingsContext = createContext();

const SettingsContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [showComplete, setShowComplete] = useState(false);

  const todoContext = {
    currentPage,
    setCurrentPage,
    postsPerPage,
    showComplete,
    setShowComplete,
  };
  return (
    <SettingsContext.Provider value={todoContext}>
      {children}
    </SettingsContext.Provider>
  );
}

export const useSettingsContext = () => useContext(SettingsContext);

export default SettingsContextProvider;