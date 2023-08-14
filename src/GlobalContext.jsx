import React from "react";

export const globalContext = React.createContext();

export function Global({ children }) {
  const [data, setData] = React.useState(null);

  function storeData(response) {
    setData(response);
    console.log(data);
  }
  function showStoredData(event) {
    event.preventDefault();
    console.log(data);
  }
  function sendData() {}
  return (
    <globalContext.Provider
      value={{ data, setData, showStoredData, storeData }}
    >
      {children}
    </globalContext.Provider>
  );
}
