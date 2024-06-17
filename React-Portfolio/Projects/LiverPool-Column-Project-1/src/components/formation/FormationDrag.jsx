/* eslint-disable react/prop-types */
/* eslint-disable no-unused-labels */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useDrag } from "react-dnd";
import { formation } from "./FormationKey";

function FormationDrag({ id, left, top, children, title, oneColor }) {
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

  let bgColor = oneColor ? oneColor : 'bg-red-600'


  return (
    <>
        <div
          ref={drag}
          className={`absolute w-[44%] h-[12%] ${bgColor} rounded-full text-sm flex items-center justify-center z-20`}
          style={{ left, top }}
        >
          {title}
        </div>
    </>
  );
}

export default FormationDrag;
