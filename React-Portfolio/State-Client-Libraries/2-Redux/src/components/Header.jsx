import "../index.css";
import {useSelector, useDispatch} from 'react-redux';
import {authAction} from '../store/store'

function Header() {

    const auth = useSelector((state)=>{
        return state.auth.isAuthentication
    })

    const dispath = useDispatch();

    function loginHandler(){
        dispath(authAction.isLogin());
    }

    function logoutHandler(){
        dispath(authAction.isLogout());
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
