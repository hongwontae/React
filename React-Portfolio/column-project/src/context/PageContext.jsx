/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

export const PageCtx = createContext({
  isAuth: false,
  logoutHandler : ()=>{},
  loginHandler : ()=>{},
  setIsAuth : ()=>{}
});

export default function PageContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  async function logoutHandler(){
    const response = await fetch('http://localhost:5000/auth/single/logout', {
      method : 'POST',
      credentials : 'include',
      body : JSON.stringify({iden : 'logout'}),
      headers : {
        'Content-Type' : 'application/json'
      }
    })

    if(!response.ok){
      throw new Error('응답 실패')
    }
    setIsAuth(false)
  }


  const ctx = {
    isAuth : isAuth,
    logoutHandler,
    setIsAuth
  }

  return (
    <>
      <PageCtx.Provider value={ctx}>{children}</PageCtx.Provider>
    </>
  );
}
