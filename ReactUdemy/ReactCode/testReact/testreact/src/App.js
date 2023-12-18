import react from 'react';

import Category from "./children/Category";
import DataView from "./Components/DataView";
import DataState from './Components/DataState';

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
    <react.Fragment>
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
    <DataState>

    </DataState>
    
    </react.Fragment>
  );
}

export default App;
