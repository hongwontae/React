import { createContext, useState } from "react";

export const ReactContext = createContext({
  data: "",
  inputData : '',
  changeLiteral: () => {},
  inputChange : ()=>{},
});

export default function ReactContextProvider({ children }) {
  const [data, setData] = useState("Hello Hi");
  const [inputData, setInputData] = useState("");


  function changeLiteral(inData) {
    setData(inData);
  }

  function inputChange(e) {
    setInputData(e.target.value);
  }



  const ctxRC = {
    data,
    changeLiteral,
    inputData,
    inputChange,
  };

  return (
    <ReactContext.Provider value={ctxRC}>{children}</ReactContext.Provider>
  );
}

// createContext, export
