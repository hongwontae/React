/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RatingCtx = createContext({
  startingMember: [],
  substanceMember: [],
  nameChangeHandler: (startIndex, subData, subIndex, startData) => {},
  resetHandler: () => {},
  setStartingMember: () => {},
  setSubstanceMember: () => {},
  rating : [],
  setRating : ()=>{}
});

function RatingProvider({ children }) {
  const [startingMember, setStartingMember] = useState([]);
  const [substanceMember, setSubstanceMember] = useState([]);
  const [rating, setRating] = useState([]);

  function nameChangeHandler(startBol, playerId, name, idx) {
    // startBol이 true라면 idx는 start idx, name은 후보 name
    // startBol이 false라면 idx는 sub idx, name은 선발 name
    console.log(startBol, playerId, name, idx);
    if (startBol) {
      const nameCheck = substanceMember.some((ele) => {
        return ele.playerName === name;
      });
      if (!nameCheck) {
        console.log("선발로 올라갈 후보 이름이 정확하지 않습니다.");
        return;
      }
      const selectedSubData = substanceMember.find((ele) => {
        return ele.playerName === name;
      });

      const selectedSubIndex = substanceMember.findIndex((ele) => {
        return ele.playerName === name;
      });

      const selectedStartData = startingMember.find((ele) => {
        return ele.playerId === playerId;
      });

      setStartingMember((prev) => {
        const copyStartMember = [...prev];
        copyStartMember[idx] = {
          ...selectedSubData,
          start_member_bol: true,
        };
        return copyStartMember;
      });

      setSubstanceMember((prev) => {
        const copySubMember = [...prev];
        copySubMember[selectedSubIndex] = {
          ...selectedStartData,
          start_member_bol: false,
        };
        return copySubMember;
      });
    } else {
      const nameCheck = startingMember.some((ele) => {
        return ele.playerName === name;
      });
      if (!nameCheck) {
        console.log("후보로 내려갈 기존 선발 이름이 정확하지 않습니다.");
        return;
      }

      const selectedStartData = startingMember.find((ele) => {
        return ele.playerName === name;
      });

      const selectedStartIndex = startingMember.findIndex((ele) => {
        return ele.playerName === name;
      });

      const selectedSubData = substanceMember.find((ele) => {
        return ele.playerId === playerId;
      });

      setSubstanceMember((prev) => {
        const copySubMember = [...prev];
        copySubMember[idx] = {
          ...selectedStartData,
          start_member_bol: false,
        };
        return copySubMember;
      });

      setStartingMember((prev) => {
        const copyStartMember = [...prev];
        copyStartMember[selectedStartIndex] = {
          ...selectedSubData,
          start_member_bol: true,
        };
        return copyStartMember;
      });
    }
  }

  const rCtx = {
    startingMember,
    setStartingMember,
    substanceMember,
    setSubstanceMember,
    nameChangeHandler,
    rating,
    setRating
  };

  return (
    <>
      <RatingCtx.Provider value={rCtx}>{children}</RatingCtx.Provider>
    </>
  );
}

export default RatingProvider;
