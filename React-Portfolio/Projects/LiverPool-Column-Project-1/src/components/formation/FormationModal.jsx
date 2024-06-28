/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
import { createPortal } from "react-dom";
import { forwardRef, useState } from "react";

const FormationModal = forwardRef(function FormationModal({ cl, button, title, buttonName, dele }, ref) {

  const [num, setNum] = useState(null);

  async function deleteHandler(id){
    const wawa = await dele(id);
    console.log(wawa);
    cl();
  }

  return createPortal(
    <>
      <dialog ref={ref} className="rounded-lg p-[2rem] bg-zinc-300 w-2/4">
        <h1 className="mb-2 text-center">{title}</h1>
        <ul className="flex justify-center gap-3 mb-4 flex-wrap">
          {button &&
            button.map((ele) => {
              if(ele.title === 'delete'){
                return;
              }
              const buttonCss =
                "bg-red-300 border-[1px] border-zinc-900 p-[0.1rem] ";
              return (
                <button key={ele.id} className={buttonCss} onClick={()=>{
                  return setNum(ele.id)
                }}>
                  {ele.title}
                </button>
              );
            })}
        </ul>
        <div className="flex justify-end gap-4">
          <button onClick={()=>{
            return deleteHandler(num)
          }}>
            {buttonName}
          </button>
          <button onClick={cl}>
            Close
          </button>
        </div>
      </dialog>
    </>,
    document.getElementById("modal")
  );
});

export default FormationModal;
