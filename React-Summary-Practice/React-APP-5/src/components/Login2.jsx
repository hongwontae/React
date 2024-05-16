import { useRef, useState } from "react";

export default function Login2() {

    const [valid, setValid] = useState(false);

    const email =useRef();
    const password =useRef();


  function handleSubmit(event) {
    event.preventDefault();
    const emailData = email.current.value;
    const passwordData = password.current.value;

    const emailState = emailData.includes('@');

    if(!emailState){
        setValid(true);
        return  
    };

    setValid(false);

    console.log(emailData)
    console.log(passwordData)
  }


  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            ref={email}
          />
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

      <div className="control-error">
        {valid && <p>Not Valid</p>}
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
