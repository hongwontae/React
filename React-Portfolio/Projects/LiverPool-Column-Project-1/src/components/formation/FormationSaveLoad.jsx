import React from "react";

/* eslint-disable react/prop-types */
function FormationSaveLoad({ getQueryToggle, buttons }) {
  return (
    <>
      <div className="flex justify-end gap-4 mr-28">
        {buttons && buttons.map((ele) => {
          <React.Fragment key={ele.id}>
            <button
              className="border-[1px] text-red-300 p-[1px]"
              onClick={() => {
                return getQueryToggle(ele.id-1);
              }}
            >
              {ele.title}
            </button>
          </React.Fragment>;
        })}
      </div>
    </>
  );
}

export default FormationSaveLoad;
