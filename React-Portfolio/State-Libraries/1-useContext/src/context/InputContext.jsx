import { createContext, useState } from "react";

export const InputContext = createContext({
  inputData: "",
  changeInput: () => {},
});

export default function InputContextProvider({children}) {

  const [inputData, setInputData] = useState("");

  function changeInput(e){
    setInputData(e.target.value);
  }

  let ctx = {
    inputData,
    changeInput,
  };

  return (
    <>
      <InputContext.Provider value={ctx}>{children}</InputContext.Provider>
    </>
  );
}
