/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const RatingCtx = createContext({
  ratings : [],
  setRatings : ()=>{},
  nameChangeHandler : ()=>{},
  ratingHandler : ()=>{}
});

function RatingProvider({ children }) {

  const [ratings, setRatings] = useState([]);

  function nameChangeHandler(newName, existingName, bol){
    setRatings((prev)=>{
      const newNameIndex = prev.findIndex(ele => {
        return ele.playerName === newName
      });
      const newNameObject = prev.find(ele=>{
        return ele.playerName === newName
      })
      const exisitingIndex = prev.findIndex(ele=>{
        return ele.playerName === existingName
      })
      const exisitingObject = prev.find(ele=>{
        return ele.playerName === existingName
      })

      // 유효성 검사
      if(newNameIndex <= -1 || exisitingIndex <= -1){
        console.log('들어오는 playerName이 존재하지 않습니다.')
        return [...prev];
      }

      const copyData = [...prev]

      if((bol && newNameObject.start_bol) || (!bol && !newNameObject.start_bol)){
        copyData[newNameIndex] = {...exisitingObject};
        copyData[exisitingIndex] = {...newNameObject};
        return copyData;
      }

     if(bol && !newNameObject.start_bol){
        copyData[newNameIndex] = {...exisitingObject, start_bol : false};
        copyData[exisitingIndex] = {...newNameObject, start_bol : true};
        return copyData;
     }

     if(!bol && newNameObject.start_bol){
      copyData[newNameIndex] = {...exisitingObject, start_bol : true};
      copyData[exisitingIndex] = {...newNameObject, start_bol : false};
      return copyData;
     }

     return copyData;


    })
  }

  function ratingHandler(value, playerId){
    setRatings(prev=>{
      const copyData = [...prev];
      const selectedIndex = copyData.findIndex(ele=>{
        return ele.pId === playerId
      })
      copyData[selectedIndex] = {
        ...copyData[selectedIndex],
        rating : value
      }
      return copyData;
    })
  }

  const rCtx = {
    ratings,
    setRatings,
    nameChangeHandler,
    ratingHandler
  }

  return (
    <>
      <RatingCtx.Provider value={rCtx}>{children}</RatingCtx.Provider>
    </>
  );
}

export default RatingProvider;
