/* eslint-disable no-unused-vars */
import HomeAllButton from "../../components/home/home-section/HomeAllButton";
import HomeSubButton from "../../components/home/home-section/HomeSubButton";
import LiverPoolIcon from "../../assets/images/liverpool-homepage-pirctures/LiverPool-Icon.png";
import { useLoaderData, useLocation } from "react-router";
import { useContext, useEffect, useState } from "react";
import { PageCtx } from "../../context/PageContext";
function HomePage() {
  const { setIsAuth, isAuth } = useContext(PageCtx);

  const loaderData = useLoaderData();


  useEffect(() => {
    if (loaderData.status === false) {
      setIsAuth(false);
    }
    if (loaderData.status === true) {
      setIsAuth(true);
    }
  }, [setIsAuth, loaderData]);

  return (
    <>
      <div className="flex justify-center gap-5">
        <h1 className="text-6xl font-bold text-red-500 m-0">
          LiverPool Column
        </h1>
        <img
          className="w-[80px] h-[80px] object-cover"
          src={LiverPoolIcon}
        ></img>
      </div>
      <div className="mt-5">
        <HomeAllButton></HomeAllButton>
        <HomeSubButton></HomeSubButton>
      </div>
    </>
  );
}

export default HomePage;

export async function loader({ request, params }) {
  const response = await fetch("http://localhost:5000/auth/single/check", {
    method: "POST",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Error 발생");
  }

  const resData = await response.json();
  console.log(resData);

  return resData;
}
