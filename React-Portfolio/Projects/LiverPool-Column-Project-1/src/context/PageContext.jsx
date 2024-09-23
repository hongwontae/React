/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { createContext, useEffect, useState } from "react";

export const PageCtx = createContext({
  isAuth: false,
  logoutHandler : ()=>{},
  loginHandler : ()=>{}
});

export default function PageContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(()=>{
    async function doubleCheck() {
      const response = await fetch('http://localhost:5000/auth/single/check', {
        method : 'POST',
        credentials : 'include'
      });

      if(!response.ok){
        throw new Error('응답 실패')
      }
      const resData = await response.json();

      if(resData.status === true){
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    }
    if(!isAuth){
      doubleCheck()
    }
  }, [isAuth])

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

  async function loginHandler(){
    const response = await fetch('http://localhost:5000/auth/single/check', {
      method : 'POST',
      credentials : 'include'
    })

    if(!response.ok){
      throw new Error('Error 발생')
    }

    const resData = await response.json();
    console.log(resData)

    setIsAuth(true)
  }

  const ctx = {
    isAuth : isAuth,
    logoutHandler,
    loginHandler
  }

  return (
    <>
      <PageCtx.Provider value={ctx}>{children}</PageCtx.Provider>
    </>
  );
}
