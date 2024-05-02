import { createContext, useState } from "react";

export const ButtonImageContext = createContext({
    save : '',
    imageTitleSave : ()=>{}
});

export default function ButtonImageContextProvider({ children }) {
  const [save, setSave] = useState("");

  function imageTitleSave(e){
    setSave(e.target.value)
  }

  let ctx = {
    save,
    imageTitleSave
  }

  return (
    <>
      <ButtonImageContext.Provider value={ctx}>{children}</ButtonImageContext.Provider>
    </>
  );
}
