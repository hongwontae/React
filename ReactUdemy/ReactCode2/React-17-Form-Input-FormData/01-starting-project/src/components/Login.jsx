import { useState } from "react";

export default function Login() {
  // const [enterEmail, setEnterEmail] = useState("");
  // const [enterPassword, setEnterPassword] = useState("");

  const [enterValue, setEnterValue] = useState({
    email : '',
    password : ''
  })

  function handleSubmit(e) {
    e.preventDefault();
    console.log(enterValue)
  }

  // function handleEmail(e) {
  //   setEnterEmail(e.target.value);
  // }

  // function handlePassword(e) {
  //   setEnterPassword(e.target.value);
  // }

  function handleFormData(identifier, value) {
    setEnterValue(prevState => {
      return {
        ...prevState,
        [identifier] : value
      }
    })
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
            onChange={(event)=>handleFormData('email', event.target.value)}
            value={enterValue.email}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event)=>handleFormData('password', event.target.value)}
            value={enterValue.password}
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
