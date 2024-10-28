/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import UpdateSingleRate from "./UpdateSingleRate";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

function UpdateRatingCotainer({ player, setFunc }) {


  function changeHandler(e, pId, playerName) {
    setFunc((prev) => {
        const sameValue = prev.some(ele => {
            return ele.player.pId === pId
        });

        if(sameValue){
            const prevArr = [...prev];
            const selectedDataIndex = prevArr.findIndex(ele => {
                return ele.player.pId === pId
            })
            prevArr[selectedDataIndex] = {
                rating : e.target.value,
                player : {
                    playerName : playerName,
                    pId : pId
                }
            }
            return prevArr
        }

        if(!sameValue){
            const prevArr = [...prev];
            const inputValue = {
                rating : e.target.value,
                player : {
                    playerName : playerName,
                    pId : pId
                }
            }
            prevArr.push(inputValue);
            return prevArr;
        }

    });
  }

  function plusHandler() {
    setFunc((prev) => {
      return [
        ...prev,
        {
          rating: 0,
          player: {
            plusPlayer : true,
            playerName: "none",
            pId: new Date().toISOString().toString(),
          },
        },
      ];
    });
  }

  function minusHandler() {
    setFunc((prev) => {
      const minusArr = [...prev];
      if(prev.length === 0){
        return minusArr
      }
      minusArr.pop();
      return minusArr;
    });
  }


  return (
    <>
      <div>
        <h1 className="font-bold text-2xl text-red-500 mb-4">
          Liverpool - Rate
        </h1>
        <div className="flex justify-center mb-8">
          <div className="">
            <h2 className="mb-4 text-red-400 text-center">Play - Member</h2>
            {player &&
              player.map((ele) => {
                return (
                  <UpdateSingleRate
                    key={ele.player.pId}
                    label={ele.player.playerName}
                    pId={ele.player.pId}
                    rating={ele.rating}
                    plus={ele?.player?.plusPlayer}
                    changeHandler={changeHandler}
                    setFunc={setFunc}
                  ></UpdateSingleRate>
                );
              })}
            <div className="w-full flex justify-center mt-10 gap-4">
              <AiOutlinePlus
                className="w-8 h-8 bg-red-500 rounded-lg hover:bg-red-700"
                onClick={plusHandler}
              ></AiOutlinePlus>
              <AiOutlineMinus
                className="w-8 h-8 bg-red-500 rounded-lg hover:bg-red-700"
                onClick={minusHandler}
              ></AiOutlineMinus>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateRatingCotainer;
