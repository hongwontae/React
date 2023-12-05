import DataLogic from "./Components/DataLogic";

function App() {
  const data = [
    {
      name: "hwt",
      age: 1000,
    },
    {
      name: "Jerrad",
      age: 2000,
    },
    {
      name: "Henderson",
      age: 3000,
    },
    {
      name: "dark",
      age: 4000,
    },
    {
      name: "matip",
      age: 5000,
    },
  ];

  return (
    <div className="App">
      <h1>Who are you?</h1>
      <DataLogic modernData={data}></DataLogic>
    </div>
  );
}

export default App;
