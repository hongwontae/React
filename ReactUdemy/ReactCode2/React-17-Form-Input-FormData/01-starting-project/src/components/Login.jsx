import { useRef, useState } from "react";

export default function Login() {

  const [formIsInvalid, setFormIsValid] = useState(false)

  const email = useRef();
  const password = useRef();


  function handleSubmit(e) {
    e.preventDefault();
    
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    const emailIsInvalid = enteredEmail.includes('@');

    if(!emailIsInvalid){
      setFormIsValid(true);
      return;
    }

    setFormIsValid(false)

    console.log('sending HTTP request!');

  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            ref={email}
          />
          <div className="control-error">{!formIsInvalid && <p>Please entered @</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            ref={password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
