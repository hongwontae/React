import { useContext } from "react";
import { changeContext } from "../store/store";

export default function Player1() {
  const { change, clickNotHandler, clickTrueHandler } =
    useContext(changeContext);

  console.log("context Change? Player1");

  return <div>
    <div>{change}</div>
    <button onClick={clickNotHandler}>Button</button>
  </div>;
}
