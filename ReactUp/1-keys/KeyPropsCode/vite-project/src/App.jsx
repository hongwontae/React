import { useState } from "react";
import FirstComponent from "./Components/FirstComponent";
import SecondeComponent from "./Components/SecondeComponent";
import ThirdCom from "./Components/ThirdCom";

const mapData = [
  {
    id: 1,
    name: "hwt",
    age: 10,
  },
  {
    id: 2,
    name: "jrd",
    age: 20,
  },
  {
    id: 3,
    name: "hds",
    age: 30,
  },
  {
    id: 4,
    name: "lln",
    age: 40,
  },
  {
    id: 5,
    name: "good",
    age: 50,
  },
];

function App() {
  const [counter, setCounter] = useState(10);

  function handleChageNumber(newCount) {
    setCounter(newCount);
  }



  return (
    <>
      <FirstComponent onSet={handleChageNumber}></FirstComponent>
      <SecondeComponent key={counter} initialValue={counter}></SecondeComponent>
      <ThirdCom data={mapData}></ThirdCom>
    </>
  );
}

export default App;
