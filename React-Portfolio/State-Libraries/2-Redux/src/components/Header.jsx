import "../index.css";
import {useSelector, useDispatch} from 'react-redux'

function Header() {

    const auth = useSelector((state)=>{
        return state.auth
    })

    const dispath = useDispatch();

    function loginHandler(){
        dispath({type : 'login'});
    }

    function logoutHandler(){
        dispath({type : 'logout'});
    }

  return (
    <>
      <header className="header">
        <h1>This is Header</h1>

        {
            auth ? <div>Login Okay</div> : <div>Login-Out!</div>
        }
        <div className="buttonContainer">
          <button className="bt1" onClick={loginHandler}>Log-In</button>
          <button className="bt2" onClick={logoutHandler}>Log-Out</button>
        </div>
      </header>
    </>
  );
}

export default Header;
