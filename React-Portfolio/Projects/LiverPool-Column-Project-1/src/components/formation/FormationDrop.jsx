/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useDrop } from "react-dnd";
import { formation } from "./FormationKey";
import FormationDrag from "./FormationDrag";
import FormationImage from "../../assets/images/Formation-Image/img.png";
import FormationStartingDrag from "./FormationStartingDrag";
import FormationSubDrag from "./FormationSubDrag";

function FormationDrop({ moveItem, player, subPlayer, moveSubItem }) {
  const [_, drop] = useDrop(
    {
      accept: formation.key,
      drop(item, monitor) {
        const distance = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + distance.x);
        const top = Math.round(item.top + distance.y);
        const firstStringId = item.sub === 'y';
        if (firstStringId) {
          moveSubItem(item.id, left, top, item.title, item.sub);
        } else {
          moveItem(item.id, left, top, item.title);
        }
        return undefined;
      },
    },
    [moveItem]
  );

  
  return (
    <>
      <div
        ref={drop}
        className="w-full h-[34rem] flex justify-around items-center relative "
      >
        <FormationStartingDrag ref={drop} player={player}></FormationStartingDrag>
        <FormationSubDrag ref={drop} subPlayer={subPlayer}></FormationSubDrag>

        <img src={FormationImage} className="w-3/4 h-[33rem] rounded-lg"></img>
      </div>
    </>
  );
}

export default FormationDrop;
