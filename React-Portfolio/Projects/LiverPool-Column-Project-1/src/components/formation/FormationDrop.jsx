/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDrop } from "react-dnd";
import { formation } from "./FormationKey";
import FormationDrag from "./FormationDrag";
import FormationImage from "../../assets/images/Formation-Image/img.png";

function FormationDrop({ moveItem, player, subPlayer, moveSubItem }) {
  const [_, drop] = useDrop(
    {
      accept: formation.key,
      drop(item, monitor) {
        const distance = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + distance.x);
        const top = Math.round(item.top + distance.y);
        const firstStringId = item.id[0];
        if (firstStringId === "s") {
          moveItem(item.id, left, top, item.title);
        } else {
          moveSubItem(item.id, left, top, item.title);
        }
        return undefined;
      },
    },
    [moveItem]
  );

  console.log("FormationDrop");

  return (
    <>
      <div
        ref={drop}
        className="w-full h-[34rem] flex justify-around items-center relative "
      >
        <div
          ref={drop}
          className="bg-neutral-400 w-[9%] h-[30rem] relative rounded-xl"
        >
          <div className="rounded-t-xl bg-red-500">Starting Member</div>
          {player.map((ele) => {
            return (
              <FormationDrag
                key={ele.id}
                id={ele.id}
                left={ele.left}
                top={ele.top}
                title={ele.title}
              ></FormationDrag>
            );
          })}
        </div>

        <div
          ref={drop}
          className="bg-neutral-400 w-[9%] h-[30rem] relative rounded-xl"
        >
          <div className="rounded-t-xl bg-red-500">Candidate Member</div>
          {subPlayer.map((ele) => {
            return (
              <FormationDrag
                key={ele.id}
                id={ele.id}
                left={ele.left}
                top={ele.top}
                title={ele.title}
              ></FormationDrag>
            );
          })}
        </div>
        <img src={FormationImage} className="w-3/4 h-[33rem]"></img>
      </div>
    </>
  );
}

export default FormationDrop;
