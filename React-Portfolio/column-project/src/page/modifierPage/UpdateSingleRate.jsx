/* eslint-disable react/prop-types */

import { useState } from "react";

function UpdateSingleRate({ label, pId, rating, changeHandler, setFunc, plus }) {

    const [JSXbol, setJSXbol] = useState(false);
    

    function doubleClickHandler(){
        console.log(plus)
        if(!plus){
            return;
        }
        setJSXbol(true)

    }

    function onBlurHandler(e){
        setJSXbol(false)
        if(!e.target.value){
            return;
        }
        setFunc((prev)=>{
            const copyPrev = [...prev];
            const selectedDataIndex = copyPrev.findIndex(ele => {
                return ele.player.pId === pId
            })
            copyPrev[selectedDataIndex] = {
                rating : 0,
                player : {
                    pId,
                    playerName : e.target.value
                }
            }
            return copyPrev
        })
    }

  return (
    <>
      <div className="flex w-full mb-2 justify-center items-center gap-4">
        {JSXbol ? (
          <input onBlur={(e)=>onBlurHandler(e)} className="w-3/6 text-black text-center"></input>
        ) : (
          <label onDoubleClick={()=>doubleClickHandler()} className="w-4/6">{label}</label>
        )}

        <input
          type="number"
          className="w-1/6 rounded-md text-center text-black"
          max={10}
          min={0}
          value={Number(rating)}
          onChange={(e) => changeHandler(e, pId, label)}
        ></input>
      </div>
    </>
  );
}

export default UpdateSingleRate;
