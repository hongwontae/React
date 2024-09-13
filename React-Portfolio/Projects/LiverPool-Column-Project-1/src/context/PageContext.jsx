/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

export const PageCtx = createContext({
  isAuth: false,
});

export default function PageContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    async function authCheck() {
      if (!isAuth) {
        const response = await fetch(
          "http://localhost:5000/auth/single/check",
          {
            method: "POST",
            credentials: "include",
          }
        );
        if (!response.ok) {
          throw new Error("전송 중 에러");
        }

        const resData = await response.json();

        if (resData.status == false) {
          setIsAuth(false);
        } else  {
            console.log('tue??')
          setIsAuth(true);
        }

        return;
      }
    }

    authCheck();
  }, [isAuth]);

  const ctx = {
    isAuth : isAuth
  }

  return (
    <>
      <PageCtx.Provider value={ctx}>{children}</PageCtx.Provider>
    </>
  );
}
