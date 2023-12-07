import Category from "./children/Category";
import DataView from "./Components/DataView";

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
    <Category>
      <li>First Item</li>
      <li>Second Item</li>
      <li>Third Item</li>
      <div>
        <div>good Game</div>
        <div>good Game</div>
      </div>
      <DataView dataView={data}></DataView>
    </Category>
  );
}

export default App;
