import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [datas, setDatas] = useState([]);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("cardData.json");
      const responseData = await response.json();

      setDatas(responseData);
      setSearchData(responseData);
    };

    getData();
  }, []);

  return (
    <AppContext.Provider value={{ datas, setDatas, searchData, setSearchData }}>
      {children}
    </AppContext.Provider>
  );
};

function GlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider, GlobalContext };
