import Counter from "./components/Counter";
import { Fragment } from "react";
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile.js'
import { useDispatch, useSelector } from "react-redux";

function App() {

  const auth = useSelector(state => state.auth.isAuth);


  return (
    <Fragment>
      <Header></Header>
      {auth? <UserProfile></UserProfile> : <Auth></Auth>}
      <Counter />
    </Fragment>
  );
}

export default App;
