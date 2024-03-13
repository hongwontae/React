import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

const data = [
  {
    name : 'hwt',
    age :1000
  },
  {
    name : 'hhh',
    age :10000
  }
]

function App() {


  return (
    <div>
      <Header></Header>
      <main>
       <CoreConcepts></CoreConcepts>
       <Examples></Examples>
      </main>
    </div>
  );
}

export default App;
