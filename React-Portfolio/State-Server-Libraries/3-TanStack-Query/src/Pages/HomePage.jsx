/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import HomeButton from "../components/usage/HomeButton";
import LiverPoolDesc from "../components/home/HomeText";
import LiverPoolNews from "../components/home/HomeAdminText";
import LiverPoolTropies from "../components/home/HomeTropies";

import { useStore } from "../util/homepageStateStore";

function HomePage() {
  const {
    toggleState,
    toggleDescHandler,
    toggleNewsHandler,
    toggleTrophyHandler,
    allViewHandler,
    allDownHandler
  } = useStore();

  const { toggleDesc, toggleNews, toggleTrophy } = toggleState;

  return (
    <>
      <section className="font-serif">
        <h1 className="text-6xl mb-8 text-red-500">LiverPool Column</h1>

        <div className="w-64 m-auto mb-10">
          <div className="flex justify-around">
            <HomeButton onClick={allViewHandler}>Click All View</HomeButton>
            <HomeButton onClick={allDownHandler}>Click All Down</HomeButton>
          </div>
        </div>

        <HomeButton onClick={toggleDescHandler}>
          Click and LiverPool Description
        </HomeButton>
        <LiverPoolDesc toggle={toggleDesc}></LiverPoolDesc>

        <HomeButton onClick={toggleNewsHandler}>
          Click and LiverPool lastes NEWS
        </HomeButton>
        <LiverPoolNews toggle={toggleNews}></LiverPoolNews>

        <HomeButton onClick={toggleTrophyHandler}>
          Click and LiverPool Tropies
        </HomeButton>
        <LiverPoolTropies toggle={toggleTrophy}></LiverPoolTropies>
      </section>
    </>
  );
}

export default HomePage;
