/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const InputContexxt = createContext({
    inputData : {},
    titleInputHandler : ()=>{},
    ageInputHandler : ()=>{}
});

export function InputContextProvider({ children }) {
  const [inputData, setInputData] = useState({
    title: "",
    age: "",
  });

  function titleInputHandler(e) {
    setInputData((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }

  function ageInputHandler(e) {
    setInputData((prev) => {
      return {
        ...prev,
        age: e.target.value,
      };
    });
  }

  const ctx = {
    inputData,
    titleInputHandler,
    ageInputHandler,
  };

  return (
    <InputContexxt.Provider value={ctx}>{children}</InputContexxt.Provider>
  );
}
