import "./App.css";
import CounterComponent from "./components/CounterComponent";
import UserComponent from './components/UserComponent';
import RequestComponent from './components/RequestComponent';

function App() {
  return (
    <>
      <h1>App</h1>
      <CounterComponent></CounterComponent>
      <UserComponent></UserComponent>
      <RequestComponent></RequestComponent>
    </>
  );
}

export default App;
