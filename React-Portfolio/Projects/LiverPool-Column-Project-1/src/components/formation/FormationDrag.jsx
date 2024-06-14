/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useDrag } from "react-dnd";
import { formation } from "./FormationKey";

function FormationDrag({ id, left, top, children, title }) {
  const [isDragging, drag, preview] = useDrag(
    {
      type: formation.key,
      item: { id, left, top, title },
      collect: (monitor) => {
        isDragging: monitor.isDragging();
      },
    },
    [id, left, top]
  );


  return (
    <>
        <div
          ref={drag}
          className="absolute w-[44%] h-[12%] bg-red-600 rounded-full text-sm flex items-center justify-center "
          style={{ left, top }}
        >
          {title}
        </div>
    </>
  );
}

export default FormationDrag;
