import './App.css';
import Test from './Components/Test';

function App() {
  
  let props1 = {testing : [1,2,3]};
  console.log(props1.testing);
  let {testing} = props1;
  console.log(testing);

  const test = [1,2,3]

  return (
    <div className="App">
      <Test test={test}></Test>
    </div>
  );
}

export default App;
