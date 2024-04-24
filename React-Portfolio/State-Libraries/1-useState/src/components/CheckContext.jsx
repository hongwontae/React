import { useContext, useState } from "react";
import { ReactContext } from "../context/shopping-cart-context";

function CheckContext() {

  const data = useContext(ReactContext);
  console.log('CheckContext Rendering!! (first-compo)')

  return (
    <>
      {data.data}
      <input
        type="text"
        value={data.inputData}
        onChange={(event) => data.inputChange(event)}
      ></input>
      <button onClick={() => data.changeLiteral(data.inputData)}>Here Button</button>
    </>
  );
}

export default CheckContext;
