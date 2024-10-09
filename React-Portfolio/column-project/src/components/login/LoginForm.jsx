/* eslint-disable no-unused-vars */
import { useContext, useEffect, useId, useRef } from "react";
import { Form, redirect, useActionData, useSubmit } from "react-router-dom";
import { PageCtx } from "../../context/PageContext";

function LoginForm() {


  const id1 = useId();
  const id2 = useId();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const submit = useSubmit();


  function actionHandler(e) {
    if (emailRef.current.value === "" || passwordRef.current.value === "") {
      console.log("No Data");
      return;
    }

    const formData = new FormData(e.target);

    submit(formData, { method: "POST", action: "/login" });
    
  }

  function cancelHandler() {
    emailRef.current.value = "";
    passwordRef.current.value = "";
  }
  


  return (
    <>
      <Form
        method="POST"
        onSubmit={actionHandler}
        className="flex flex-col justify-center items-center gap-4 border-[1px] w-3/6 m-auto p-12 rounded-lg"
      >
        <h2 className="text-red-500 text-4xl mb-4">Admin Login Form</h2>
        <div className="flex justify-center gap-10 ">
          <label htmlFor={id1}>E-Mail</label>
          <input
            id={id1}
            ref={emailRef}
            type="text"
            name="email"
            className="rounded-sm text-black text-center p-[0.1rem] "
          ></input>
        </div>
        <div className="flex justify-center gap-4">
          <label htmlFor={id2}>Password</label>
          <input
            id={id2}
            ref={passwordRef}
            type="password"
            name="password"
            className="rounded-sm text-black text-center p-[0.1rem]"
          ></input>
        </div>
        <div className="flex justify-end gap-4 mt-2 w-full">
          <button type="submit" className="border-[1px] p-1 rounded-lg">
            Login
          </button>
          <button
            onClick={cancelHandler}
            type="button"
            className="border-[1px] p-1 rounded-lg"
          >
            Reset
          </button>
        </div>
      </Form>
    </>
  );
}

export default LoginForm;

export async function loginAction({ request, params }) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const response = await fetch("http://localhost:5000/auth/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials : 'include'
  });

  if (!response.ok) {
    throw new Error("에러 발생");
  }

  const resData = await response.json();


  if(resData?.message === 'Login Success'){
    return redirect('/?state=true')
  } else {
    return { message: "action trigger", data: resData };
  }


}
