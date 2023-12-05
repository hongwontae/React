import Test from './Components/Test';

function App() {
  

  const test = [1,2,3]
  const info = [{
    name : 'hwt',
    age : 1000
  },{
    name : 'hen',
    age : 32
  },{
    name : 'cou',
    age : 2000
  }]

  return (
    <div className="App">
      <Test test={test} infoProps={info}></Test>
    </div>
  );
}

export default App;
