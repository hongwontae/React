import FormationDrag from "./FormationDrag";
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const FormationStartingDrag = forwardRef(function FormationStartingDrag(
  { player },
  drop
) {
  return (
    <>
      <div
        ref={drop}
        className="bg-neutral-400 w-[9%] h-[30rem] rounded-xl relative"
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
    </>
  );
});

export default FormationStartingDrag;
