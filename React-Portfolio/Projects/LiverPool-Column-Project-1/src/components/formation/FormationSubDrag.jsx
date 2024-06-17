/* eslint-disable react/prop-types */
import { forwardRef } from "react";
import FormationDrag from "./FormationDrag";

const FormationSubDrag = forwardRef(function FormationSubDrag({subPlayer}, drop) {
  return (
    <>
      <div
        ref={drop}
        className="bg-neutral-400 w-[9%] h-[30rem] rounded-xl relative"
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
              oneColor={'bg-indigo-500'}
            ></FormationDrag>
          );
        })}
      </div>
    </>
  );
});

export default FormationSubDrag;
