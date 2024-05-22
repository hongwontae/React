import { useContext, useState } from "react";
import { CheckContext } from "../context/CheckContext";



function CheckComponents() {
  const ctx = useContext(CheckContext);

  

  return (
    <>
    <div>{ctx.check}</div>
      <button onClick={() => ctx.addItem(ctx.check+1)}>Button</button>
    </>
  );
}

export default CheckComponents;
